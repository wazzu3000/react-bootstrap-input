import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { BootstrapInput } from 'react-bootstrap-input';

export function BootstrapInputCustomErrDoc() {
  const [value, setState] = useState('');

  return (
    <div>
      <p>
        You can customize the error messages with the attributes <code>patternError</code> and <code>requiredError</code>

      </p>
      <div className="card">
        <div className="card-body">
          <BootstrapInput name="inputLabel" label="Custom error" value={value} onChange={event => setState(event.currentTarget.value)} pattern="^[A-Z]+$" requiredError="You must be fill this field" patternError="You must type only capital letters" required />
        </div>
      </div>
      <SyntaxHighlighter language="jsx">
        {
          '<BootstrapInput name="inputLabel" label="Custom error" pattern="^[A-Z]+$" requiredError="You must be fill this field" patternError="You must type only capital letters" required />'
        }
      </SyntaxHighlighter>
    </div>
  )
}