import React, { useState } from 'react';
import { BootstrapForm, BootstrapTextEdit, BootstrapDropDown } from 'react-bootstrap-input';

export function BootstrapFormDoc() {
  const onSubmit = evt => {
    evt.preventDefault();
    alert('You submit the form');
  }
  const [user, setState] = useState({});

  return (
    <div className="card">
      <div className="card-body">
        <BootstrapForm name="form1" onSubmit={onSubmit}>
          <div className="row">
            <div className="col">
              <BootstrapTextEdit name="name" label="Name" value={user.name} onChange={event => setState({...user, name: event.currentTarget.value})} required />
            </div>
            <div className="col">
              <BootstrapTextEdit name="lastname" label="Lastname" value={user.lastname} onChange={event => setState({...user, lastname: event.currentTarget.value})} required />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <BootstrapTextEdit type="email" name="email" label="Email" value={user.email} onChange={event => setState({...user, email: event.currentTarget.value})} required />
            </div>
            <div className="col">
              <BootstrapTextEdit type="tel" name="phone" label="Phone" value={user.phone} onChange={event => setState({...user, phone: event.currentTarget.value})} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <BootstrapDropDown name="experience" label="Experience" value={user.experience} onChange={event => setState({...user, experience: event.currentTarget.value})} required>
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
      <div className="body-footer">
        {
          JSON.stringify(user)
        }
      </div>
    </div>
  )
}