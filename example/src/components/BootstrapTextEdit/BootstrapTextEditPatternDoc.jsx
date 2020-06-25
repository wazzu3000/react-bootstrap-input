import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { BootstrapTextEdit } from 'react-bootstrap-input';

export function BootstrapTextEditPatternDoc() {
  const [value, setState] = useState('');
  const link = 'https://www.w3schools.com/tags/att_input_pattern.asp';

  return (
    <div>
      <p>
        You can add customs validators with the attribute <code>pattern</code>, it helps you to set
        custom regex at validate the input, if yout have any questions to how it works, you can visit
        the follow link <a href={link}>{link}</a>
      </p>
      <div className="card">
        <div className="card-body">
          <BootstrapTextEdit name="inputLabel" label="Custom validator" value={value} onChange={event => setState(event.currentTarget.value)} placeholder="Add only capital letters" pattern="^[A-Z]+$" />
        </div>
      </div>
      <SyntaxHighlighter language="jsx">
        {
          '<BootstrapTextEdit name="inputLabel" label="Custom validator" placeholder="Add only capital letters" pattern="^[A-Z]+$" />'
        }
      </SyntaxHighlighter>
    </div>
  )
}