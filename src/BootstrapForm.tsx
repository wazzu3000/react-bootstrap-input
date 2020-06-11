import React, { FormEvent, useEffect } from 'react';
import { Autocomplete, EncTypes, Methods, Targets } from './Types';
import { removeForm, getInputs } from './Validators';

interface Props {
  // Attributes
  acceptCharset?: string;
  action?: string;
  autoComplete?: Autocomplete;
  className: string;
  children: any;
  encType?: EncTypes;
  id?: string;
  method?: Methods;
  name: string;
  target?: Targets;

  // Events
  onBlur?: () => void;
  onChange?: () => void;
  onContextMenu?: () => void;
  onFocus?: () => void;
  onInput?: () => void;
  onInvalid?: () => void;
  onReset?: () => void;
  onSearch?: () => void;
  onSelect?: () => void;
  onSubmit: (event: FormEvent) => void;
}

export function BootstrapForm(props: Props) {
  const onSubmit = (event: FormEvent) => {
    let hasErrors = false;
    const inputs = getInputs(props.name);
    for (let i in inputs) {
      const input = inputs[i];
      input.hasLostFocus = true;
      input.touched = true;
      if (!input.validateInput()) {
        hasErrors = true;
      }
    }

    if (hasErrors) {
      event.preventDefault();
    }
    
    props.onSubmit && props.onSubmit(event);
  }

  useEffect(() => {
    return () => removeForm(props.name);
  }, [props.name])

  return (
    <form acceptCharset={props.acceptCharset} action={props.action} autoComplete={props.autoComplete}
      className={props.className} encType={props.encType} id={props.id} method={props.method}
      name={props.name} noValidate target={props.target}
      
      onBlur={props.onBlur}
      onChange={props.onChange}
      onContextMenu={props.onContextMenu}
      onFocus={props.onFocus}
      onInput={props.onInput}
      onInvalid={props.onInvalid}
      onReset={props.onReset}
      onSelect={props.onSelect}
      onSubmit={onSubmit}>
      {
        props.children
      }
    </form>
  )
}
