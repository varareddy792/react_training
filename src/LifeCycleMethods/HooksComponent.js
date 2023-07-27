import React, { useEffect, useState } from 'react'

export default function HooksComponent({depandancyVariable, setDepandancyVariable }) {
  const [myState, setMyState] = useState('initialState');

  useEffect(() => {
    setMyState('WithoutDepandancy')
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setMyState(`with depandancy:${depandancyVariable}`)
    }, 1000); 
  },[depandancyVariable])
  
  return (
    <div>
      {`myState value: ${myState}`}
      <br/>
      <button onClick={() => setDepandancyVariable('changedState')}>ChangeState</button>
    </div>
  )
}
