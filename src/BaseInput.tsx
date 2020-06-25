import { Component, ChangeEvent, FocusEvent, RefObject } from 'react';
import { registerInput, removeInput } from './Validators';

export interface InputProps {
  name: string;
  value?: any;
  invalid?: boolean;
  required?: boolean;

  onBlur?: (event: FocusEvent) => void;
  onChange?: (event: ChangeEvent) => void;
}

export interface InputState {
  value?: any;
  error: string;
  invalid: boolean;
}

export abstract class BaseInput<P extends InputProps = InputProps, S extends InputState = InputState, E extends HTMLElement = HTMLElement> extends Component<P, S> {
  ref: RefObject<E>;
  requiredError: string = 'Input required';
  formName: string;
  hasLostFocus: boolean;
  touched: boolean;

  componentDidMount() {
    if (!this.ref || !this.ref.current) {
      return;
    }

    let dom: HTMLElement = this.ref.current;
    if (this.props.invalid) {
      this.setAsInvalid();
    }

    while (!(dom instanceof HTMLFormElement)) {
      if (!dom.parentElement) {
        return;
      }

      dom = dom.parentElement;
    }

    this.formName = dom.getAttribute('name') || '';
    registerInput(this, this.formName);
  }

  abstract componentDidUpdate(prevProps?: P, prevState?: S): void;

  componentWillUnmount() {
    if (this.formName) {
      removeInput(this.formName, this.props.name);
    }
  }

  onChange(event: ChangeEvent) {
    this.touched = true;
    this.validateInput();
    if (this.props.onChange) {
      this.props.onChange(event);
    } else {
      this.setState({ value: event.currentTarget['value'] });
    }
  }

  onBlur(event: FocusEvent) {
    this.hasLostFocus = true;
    this.validateInput();
    this.props.onBlur && this.props.onBlur(event);
  }

  validateInput(): boolean {
    const invalid = this.state.invalid;
    const input: any = this.ref.current;
    if (!input || !this.touched || !this.hasLostFocus) {
      return true;
    }

    if (this.props.required && !input.value) {
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

  setAsInvalid() {
    this.touched = true;
    this.hasLostFocus = true;
    this.validateInput();
  }
}