import React, { FocusEvent, ChangeEvent, MouseEvent, FormEvent, createRef } from 'react';
import { Autocomplete, InputTypes } from './Types';
import { BaseInput } from './BaseInput';

interface Props {
  // Input attributes
  autoComplete?: Autocomplete;
  autoFocus?: boolean;
  className?: string;
  children?: any;
  disabled?: boolean;
  form?: string;
  formNoValidate?: boolean;
  id?: string;
  max?: number;
  maxLength?: number;
  min?: number;
  minLength?: number;
  name: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: number;
  step?: number;
  value?: string;
  type?: InputTypes;
  label?: string;
  invalid?: boolean;
  requiredError?: string;
  patternError?: string;

  // Input events
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onContextMenu?: (event: MouseEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onInput?: (event: FormEvent<HTMLInputElement>) => void;
}

interface State {
  value: string;
  error: string;
  invalid: boolean;
}

export class BootstrapTextEdit extends BaseInput<Props, State, HTMLInputElement> {
  static requiredError: string = 'Input required';
  static patternError: string = 'Incorrect pattern';
  regex: RegExp;
  patternError: string;
  hasLostFocus: boolean;
  touched: boolean;

  static sedDetaulErrorMessages(requiredError: string, patternError: string) {
    this.requiredError = requiredError;
    this.patternError = patternError;
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      value: props.value || '',
      error: '',
      invalid: false
    }

    if (props.pattern) {
      this.regex = new RegExp(props.pattern);
    }

    this.ref = createRef<HTMLInputElement>();
    this.requiredError = props.requiredError || BootstrapTextEdit.requiredError;
    this.patternError = props.patternError || BootstrapTextEdit.patternError;
    this.touched = !!props.invalid;
    this.hasLostFocus = !!props.invalid;
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  render() {
    return (
      <div className="form-group">
        {
          !!this.props.label && (
            <label className={this.state.invalid ? 'text-danger' : ''}>
              {this.props.label}:
              {
                this.props.required && <span className="ml-1 text-danger">*</span>
              }
            </label>
          )
        }
        
        <input ref={this.ref} id={this.props.id} name={this.props.name} type={this.props.type || 'text'}
          className={'form-control' + (this.state.invalid ? ' is-invalid' : '')} autoComplete={this.props.autoComplete}
          autoFocus={this.props.autoFocus} disabled={this.props.disabled} form={this.props.form}
          formNoValidate={this.props.formNoValidate} max={this.props.max} maxLength={this.props.maxLength}
          min={this.props.min} minLength={this.props.minLength} pattern={this.props.pattern}
          placeholder={this.props.placeholder} readOnly={this.props.readOnly} required={this.props.required}
          size={this.props.size} step={this.props.step} value={this.state.value}
        
          onBlur={this.onBlur.bind(this.props.onBlur)} onChange={this.onChange}
          onContextMenu={this.props.onContextMenu} onFocus={this.props.onFocus} onInput={this.props.onInput}
        />
        
        {
          (!!this.state.error || this.props.maxLength) && (
            <div className="row">
              {
                <div className="col">
                  {
                    !!this.state.error && <small className="form-text text-danger">{this.state.error}</small>
                  }
                </div>
              }
              
              {
                this.props.maxLength && (
                  <div className="col-auto">
                    <small className="form-text text-muted">
                      {this.state.value.length} / {this.props.maxLength}
                    </small>
                  </div>
                )
              }
            </div>
          )
        }
      </div>
    )
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.invalid != this.props.invalid) {
      this.setAsInvalid();
    }

    if (prevProps.pattern != this.props.pattern && this.props.pattern) {
      this.regex = new RegExp(this.props.pattern);
    }

    if (this.props.value !== undefined && this.props.value != this.state.value) {
      this.setState({
        value: this.props.value
      });
    }
  }

  validateInput(): boolean {
    const invalid = this.state.invalid;
    const input = this.ref.current;
    if (!input || !this.touched || !this.hasLostFocus) {
      return true;
    }

    if (input.required && !input.value) {
      this.state.error != this.requiredError && this.setState({
        invalid: true,
        error: this.requiredError
      });
      return false;
    } else if (this.regex && !this.regex.test(input.value)) {
      this.state.error != this.patternError && this.setState({
        invalid: true,
        error: this.patternError
      });
      return false;
    } else if (invalid) {
      this.setState({
        invalid: false,
        error: ''
      });
    }

    return true;
  }
}
