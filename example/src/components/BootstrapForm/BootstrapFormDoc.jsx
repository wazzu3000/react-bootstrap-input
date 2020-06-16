import React from 'react';
import { BootstrapForm, BootstrapTextEdit, BootstrapDropDown } from 'react-bootstrap-input';

export function BootstrapFormDoc() {
  const onSubmit = evt => {
    evt.preventDefault();
    alert('You submit the form');
  }

  return (
    <div className="card">
      <div className="card-body">
        <BootstrapForm name="form1" onSubmit={onSubmit}>
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
          <div className="row">
            <div className="col">
              <BootstrapDropDown name="experience" label="Experience" required>
                <option value="">Select an option</option>
                <option>Less than 1 year</option>
                <option>1 to 3 years</option>
                <option>More than 3 years</option>
              </BootstrapDropDown>
            </div>
          </div>

          <div className="text-right">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </BootstrapForm>
      </div>
    </div>
  )
}