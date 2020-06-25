import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { BootstrapDropDown } from 'react-bootstrap-input'

export function BootstrapDropDownRequiredDoc() {
  return (
    <div>
      <p>
        You can add a custom label with the attribute <code>label</code>
      </p>
      <div className="card">
        <div className="card-body">
          <BootstrapDropDown name="selectBasic" label="Select an option" required>
            <option value="">Select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </BootstrapDropDown>
        </div>
      </div>
      <SyntaxHighlighter language="html">
        {
        `<BootstrapDropDown name="selectBasic" label="Select an option" required>
  <option value="">Option 0</option>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</BootstrapDropDown>`
        }
      </SyntaxHighlighter>
    </div>
  )
}