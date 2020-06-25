import React, { useState } from 'react';
import { BootstrapTextEdit } from 'react-bootstrap-input';
import { BootstrapTextEditDoc } from './components/BootstrapTextEdit/BootstrapTextEditDoc';
import { BootstrapTextEditLabelDoc } from './components/BootstrapTextEdit/BootstrapTextEditLabelDoc';
import { BootstrapTextEditRequiredDoc } from './components/BootstrapTextEdit/BootstrapTextEditRequiredDoc';
import { BootstrapTextEditPatternDoc } from './components/BootstrapTextEdit/BootstrapTextEditPatternDoc';
import { BootstrapTextEditCustomErrDoc } from './components/BootstrapTextEdit/BootstrapTextEditCustomErrDoc';
import { BootstrapDropDownDoc } from './components/BootstrapDropDown/BootstrapDropDownDoc';
import { BootstrapDropDownLabelDoc } from './components/BootstrapDropDown/BootstrapDropDownLabelDoc';
import { BootstrapDropDownRequiredDoc } from './components/BootstrapDropDown/BootstrapDropDownRequiredDoc';
import { BootstrapInputDoc } from './components/BootstrapInput/BootstrapInputDoc';
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
      <BootstrapTextEditDoc />
      <BootstrapTextEditLabelDoc />
      <BootstrapTextEditRequiredDoc />
      <BootstrapTextEditPatternDoc />
      <BootstrapTextEditCustomErrDoc />
      

      <p>The input can start as error if you want</p>
      <BootstrapTextEdit name="inputDefaultError" label="Starts with error" value={value.inputDefaultError} onChange={handleChanges} invalid={true} required />





      <BootstrapTextEdit name="inputDefaultError" label="Starts with error" maxLength={10} />

      <h2>BootstrapDropDown</h2>
      <BootstrapDropDownDoc />
      <BootstrapDropDownLabelDoc />
      <BootstrapDropDownRequiredDoc />

      <h2>BootstrapInput</h2>
      <BootstrapInputDoc />

      <BootstrapFormDoc />
    </div>
  )
}

export default App
