import { InputProps, InputState, BaseInput } from './BaseInput';

export abstract class Input<P extends InputProps = InputProps, S extends InputState = InputState, E extends HTMLElement = HTMLElement> extends BaseInput<P, S, E> {
  componentDidUpdate() {
    if (this.props.value !== undefined && this.props.value != this.state.value) {
      this.setState({
        value: this.props.value
      });
    }
  }
}