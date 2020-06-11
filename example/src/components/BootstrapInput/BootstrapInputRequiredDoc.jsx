import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { BootstrapInput } from 'react-bootstrap-input';

export function BootstrapInputRequiredDoc() {
  const [value, setState] = useState('');

  return (
    <div>
      <p>
        When you add the attribute required it adds an value validator taht checks if it's not null
        at time to it's touched and blur, if any of the requirements is not met, the validation is not fired.
      </p>
      <div className="card">
        <div className="card-body">
          <BootstrapInput name="inputLabel" label="Required input" value={value} onChange={event => setState(event.currentTarget.value)} required />
        </div>
      </div>
      <SyntaxHighlighter language="jsx">
        {
          '<BootstrapInput name="inputLabel" label="Required input" required />'
        }
      </SyntaxHighlighter>
    </div>
  )
}