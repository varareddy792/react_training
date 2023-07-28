import React, { useEffect, useState } from 'react'

export default function HooksComponent({depandancyVariable, setDepandancyVariable }) {
  const [myState, setMyState] = useState('initialState');

  useEffect(() => {
    console.log("started execution");
    setMyState('WithoutDepandancy')
  },[])

  useEffect(() => {
    setTimeout(() => {
      setMyState(`with depandancy:${depandancyVariable}`)
    }, 1000); 
  }, [depandancyVariable])
  
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("hiii")
      //setMyState(`with depandancy:${depandancyVariable}`)
    }, 1000);
    return clearInterval(interval)
  },[])
  
  return (
    <div>
      {`myState value: ${myState}`}
      <br/>
      <button onClick={() => setDepandancyVariable('changedState')}>ChangeState</button>
    </div>
  )
}
