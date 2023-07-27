import React, { useState } from 'react'

export default function ReusableComponent({type, id, name, label}) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <label>{label}:</label>
      <input
        type={type}
        id={id}
        name={name}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  )
}
