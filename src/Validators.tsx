import { Dictionary } from './Types';
import { BootstrapInput } from './BootstrapInput';

const records: Dictionary<Dictionary<BootstrapInput>> = {};

export function registerInput(input: BootstrapInput, formName: string) {
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

export function getInputs(formName: string): Dictionary<BootstrapInput> {
  return records[formName];
}

export function removeForm(formName: string) {
  delete records[formName];
}