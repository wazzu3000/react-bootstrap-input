import { Dictionary } from './Types';
import { BootstrapTextEdit } from './BootstrapTextEdit';

const records: Dictionary<Dictionary<BootstrapTextEdit>> = {};

export function registerInput(input: BootstrapTextEdit, formName: string) {
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

export function getInputs(formName: string): Dictionary<BootstrapTextEdit> {
  return records[formName];
}

export function removeForm(formName: string) {
  delete records[formName];
}