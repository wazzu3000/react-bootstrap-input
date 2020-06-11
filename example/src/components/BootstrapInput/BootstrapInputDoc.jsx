import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { BootstrapInput } from 'react-bootstrap-input';

export function BootstrapInputDoc() {
  const [value, setState] = useState('');

  return (
    <div>
      <p>
        The component <code>{'<SyntaxHighlighter />'}</code> renders a HTML input inside of a div with
        the <code>form-control</code> and <code>form-group</code> respective class.
      </p>
      <p>
        This component is limited to use just type inputs, currently is not posible renders checkbox,
        radio buttons, range, etc.
      </p>
      <div className="card">
        <div className="card-body">
          <BootstrapInput name="inputBasic" value={value} onChange={event => setState(event.currentTarget.value)} />
        </div>
      </div>
      <SyntaxHighlighter language="jsx">
        {
          '<BootstrapInput name="inputBasic" />'
        }
      </SyntaxHighlighter>
    </div>
  )
}