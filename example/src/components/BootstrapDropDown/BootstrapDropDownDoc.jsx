import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { BootstrapDropDown } from 'react-bootstrap-input'

export function BootstrapDropDownDoc() {
  return (
    <div>
      <p>
        The component <code>{'<BootstrapDropDown />'}</code> renders an HTML <code>select</code> inside
        of a <code>div</code> with the <code>form-control</code> and <code>form-group</code> respective
        class.
      </p>
      <div className="card">
        <div className="card-body">
          <BootstrapDropDown name="selectBasic">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </BootstrapDropDown>
        </div>
      </div>
      <SyntaxHighlighter language="html">
        {
        `<BootstrapDropDown name="selectBasic">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</BootstrapDropDown>`
        }
      </SyntaxHighlighter>
    </div>
  )
}