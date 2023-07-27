import React from 'react'

export default function ConditionalRender({shouldRender}) {
  // if (shouldRender) {
  //   return <h1>render with if condition</h1>
  // }
  return (
    <div>
      {shouldRender && <h1>render with AND operator</h1>}
      {
        shouldRender
        ? <h1>render with ternary operator with true case</h1>
        : <h1>render with ternary operator with false case</h1>
      }
    </div>
  )
}
