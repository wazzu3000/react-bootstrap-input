import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { BootstrapInput } from 'react-bootstrap-input';

export function BootstrapInputLabelDoc() {
  const [value, setState] = useState('');

  return (
    <div>
      <p>
        You can add a label to the input with the attribute <code>label</code>
      </p>
      <div className="card">
        <div className="card-body">
          <BootstrapInput name="inputLabel" label="Basic input" value={value} onChange={event => setState(event.currentTarget.value)} />
        </div>
      </div>
      <SyntaxHighlighter language="jsx">
        {
          '<BootstrapInput name="inputBasic" label="Basic input" />'
        }
      </SyntaxHighlighter>
    </div>
  )
}