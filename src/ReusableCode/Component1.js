import React from 'react';
import ReusableComponent from './ReusableComponent';

export default function Component1() {
  return (
    <div>      
      <ReusableComponent
        type="text"
        label="Name"
      />
    </div>
  )
}
