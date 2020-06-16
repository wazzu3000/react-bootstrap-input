import React, { useState } from 'react';
import { BootstrapTextEdit } from 'react-bootstrap-input';
import { BootstrapInputDoc } from './components/BootstrapInput/BootstrapInputDoc';
import { BootstrapInputLabelDoc } from './components/BootstrapInput/BootstrapInputLabelDoc';
import { BootstrapInputRequiredDoc } from './components/BootstrapInput/BootstrapInputRequiredDoc';
import { BootstrapInputPatternDoc } from './components/BootstrapInput/BootstrapInputPatternDoc';
import { BootstrapInputCustomErrDoc } from './components/BootstrapInput/BootstrapInputCustomErrDoc';
import { BootstrapDropDownDoc } from './components/BootstrapDropDown/BootstrapDropDownDoc';
import { BootstrapDropDownLabelDoc } from './components/BootstrapDropDown/BootstrapDropDownLabelDoc';
import { BootstrapDropDownRequiredDoc } from './components/BootstrapDropDown/BootstrapDropDownRequiredDoc';
import { BootstrapFormDoc } from './components/BootstrapForm/BootstrapFormDoc';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [value, setState] = useState({
    inputBasic: '',
    inputLabel: '',
    inputRequired: '',
    inputRegex: '',
    inputCustomErr: '',
    inputDefaultError: ''
  });

  const handleChanges = event => {
    const input = event.currentTarget;
    setState({ [input.name]: input.value} );
  }

  return (
    <div className="container">
      <h1>BootstrapInput</h1>
      <h2>BootstrapTextEdit</h2>
      <BootstrapInputDoc />
      <BootstrapInputLabelDoc />
      <BootstrapInputRequiredDoc />
      <BootstrapInputPatternDoc />
      <BootstrapInputCustomErrDoc />
      

      <p>The input can start as error if you want</p>
      <BootstrapTextEdit name="inputDefaultError" label="Starts with error" value={value.inputDefaultError} onChange={handleChanges} invalid={true} required />





      <BootstrapTextEdit name="inputDefaultError" label="Starts with error" maxLength={10} />

      <h2>BootstrapDropDown</h2>
      <BootstrapDropDownDoc />
      <BootstrapDropDownLabelDoc />
      <BootstrapDropDownRequiredDoc />

      <BootstrapFormDoc />
    </div>
  )
}

export default App
