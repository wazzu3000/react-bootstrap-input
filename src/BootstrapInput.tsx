import React, { FocusEvent, ChangeEvent, ReactElement, createRef, cloneElement } from 'react';
import { Input } from './Input';

interface Props {
  name: string;
  value?: string;
  required?: boolean;
  invalid?: boolean;
  label?: string;
  children: ReactElement<any>;
  requiredError?: string;

  onBlur?: (event: FocusEvent) => void;
  onChange?: (event: ChangeEvent) => void;
}

interface State {
  value: string;
  error: string;
  invalid: boolean;
}

export class BootstrapInput extends Input<Props, State> {
  static requiredError: string = 'Input required';
  hasLostFocus: boolean;
  touched: boolean;

  static sedDetaulErrorMessage(requiredError: string) {
    this.requiredError = requiredError;
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      value: props.value || '',
      error: '',
      invalid: false
    }

    this.ref = createRef<HTMLElement>();
    this.requiredError = props.requiredError || BootstrapInput.requiredError;
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
        {
          cloneElement(this.props.children, {
            ref: this.ref,
            className: (this.ref.current?.className || '') + (this.state.invalid ? ' is-invalid' : ''),
            value: this.state.value,
            onChange: this.onChange,
            onBlur: this.onBlur
          })
        }
        {
          !!this.state.error && <small className="form-text text-danger">{this.state.error}</small>
        }
      </div>
    )
  }
}