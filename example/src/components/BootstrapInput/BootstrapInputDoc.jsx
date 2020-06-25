import React, { useState } from 'react';
import { BootstrapInput } from 'react-bootstrap-input';

export function BootstrapInputDoc() {
  const [value, setState] = useState(75);
  const onChange = event => {
    setState(parseInt(event.target.value));
  }

  return (
    <div>
      <BootstrapInput name="" label="Some file" value={value} onChange={onChange} required>
        <input type="range" class="custom-range" id="customRange1" min={0} max={100} />
      </BootstrapInput>
      {value}
    </div>
  )
}