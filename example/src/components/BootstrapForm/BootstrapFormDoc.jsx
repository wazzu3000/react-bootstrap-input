import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { BootstrapForm, BootstrapTextEdit } from 'react-bootstrap-input';

export function BootstrapFormDoc() {
  const onSubmit = evt => {
    alert('You submit the form');
  }

  return (
    <BootstrapForm name="form1">
      <div className="row">
        <div className="col">
          <BootstrapTextEdit name="name" label="Name" required />
        </div>
        <div className="col">
          <BootstrapTextEdit name="lastname" label="Lastname" required />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <BootstrapTextEdit type="email" name="email" label="Email" required />
        </div>
        <div className="col">
          <BootstrapTextEdit type="tel" name="phone" label="Phone" />
        </div>
      </div>

      <div className="text-right">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </BootstrapForm>
  )
}