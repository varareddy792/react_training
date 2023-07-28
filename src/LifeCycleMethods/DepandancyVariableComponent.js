import React, { useState } from 'react'
import HooksComponent from './HooksComponent';

export default function DepandancyVariableComponent() {
  const [myVariable, setMyVariable] = useState('initial value');

  return (
    <div>
      <HooksComponent
        depandancyVariable={myVariable}
        setDepandancyVariable={setMyVariable}
      />
    </div>
  )
}
