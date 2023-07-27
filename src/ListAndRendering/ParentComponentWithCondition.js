import React from 'react';
import ConditionalRender from './ConditionalRender';

export default function ParentComponentWithCondition() {
  return (
    <div>
      <ConditionalRender shouldRender="true"/>
    </div>
  )
}
