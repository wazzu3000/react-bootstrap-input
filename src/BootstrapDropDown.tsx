import React, { ChangeEvent, FocusEvent, FormEvent, MouseEvent, SyntheticEvent, createRef } from 'react';
import { Input } from './Input';

interface Props {
  autoFocus?: boolean;
  className?: string;
  children?: any;
  disabled?: boolean;
  form?: string;
  id?: string;
  multiple?: boolean
  name: string;
  required?: boolean;
  size?: number;
  value?: string;
  label?: string;
  invalid?: boolean;
  requiredError?: string;

  onBlur?: (event: FocusEvent<HTMLSelectElement>) => void;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  onContextMenu?: (event: MouseEvent<HTMLSelectElement>) => void;
  onFocus?: (event: FocusEvent<HTMLSelectElement>) => void;
  onInput?: (event: FormEvent<HTMLSelectElement>) => void;
  onSelect?: (event: SyntheticEvent<HTMLSelectElement>) => void;
}

interface State {
  value: string;
  error: string;
  invalid: boolean;
}

export class BootstrapDropDown extends Input<Props, State, HTMLSelectElement>  {
  static requiredError: string = 'Input required';
  requiredError: string;
  hasLostFocus: boolean;
  touched: boolean;

  constructor(props: Props) {
    super(props);

    this.state = {
      value: props.value || '',
      error: '',
      invalid: false
    }

    this.ref = createRef<HTMLSelectElement>();
    this.requiredError = BootstrapDropDown.requiredError;
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.setAsInvalid = this.setAsInvalid.bind(this);
  }

  static sedDetaulErrorMessage(requiredError: string) {
    this.requiredError = requiredError;
  }

  render() {
    return (
      <div className="form-group">
        {
          !!this.props.label && (
            <label className={this.state.invalid ? 'text-danger' : ''}>
              {this.props.label}: {
                this.props.required && <span className="ml-1 text-danger">*</span>
              }
            </label>
          )
        }
        <select ref={this.ref} autoFocus={this.props.autoFocus}
          className={'form-control' + (this.state.invalid ? ' is-invalid' : '')}
          disabled={this.props.disabled} form={this.props.form} id={this.props.id} multiple={this.props.multiple}
          name={this.props.name} required={this.props.required} size={this.props.size} value={this.state.value}
          
          onBlur={this.onBlur} onChange={this.onChange} onContextMenu={this.props.onContextMenu}
          onFocus={this.props.onFocus} onInput={this.props.onInput} onSelect={this.props.onSelect}>
            {this.props.children}
        </select>
        {
          !!this.state.error && <small className="form-text text-danger">{this.state.error}</small>
        }
      </div>
    )
  }

  validateInput(): boolean {
    const invalid = this.state.invalid;
    const input = this.ref.current;
    if (!input || !this.touched || !this.hasLostFocus) {
      return true;
    }

    if (input.required && !input.value) {
      !invalid && this.setState({
        invalid: true,
        error: this.requiredError
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