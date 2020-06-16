import { Dictionary } from './Types';
import { Input } from './Input';

const records: Dictionary<Dictionary<Input>> = {};

export function registerInput(input: Input, formName: string) {
  if (formName && !records[formName]) {
    records[formName] = {}
  }

  records[formName][input.props.name] = input;
}

export function removeInput(formName: string, inputName: string) {
  if (!records[formName]) {
    return
  }

  delete records[formName][inputName];
}

export function getInputs(formName: string): Dictionary<Input> {
  return records[formName];
}

export function removeForm(formName: string) {
  delete records[formName];
}