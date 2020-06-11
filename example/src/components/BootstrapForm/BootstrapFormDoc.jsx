import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { BootstrapForm, BootstrapInput } from 'react-bootstrap-input';

export function BootstrapFormDoc() {
  const onSubmit = evt => {
    alert('You submit the form');
  }

  return (
    <BootstrapForm name="form1">
      <div className="row">
        <div className="col">
          <BootstrapInput name="name" label="Name" required />
        </div>
        <div className="col">
          <BootstrapInput name="lastname" label="Lastname" required />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <BootstrapInput type="email" name="email" label="Email" required />
        </div>
        <div className="col">
          <BootstrapInput type="tel" name="phone" label="Phone" />
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