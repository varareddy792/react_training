import React from 'react'

const myList = [
  {
    id: 1,
    name: "john",
    country:"US"
  },
  {
    id: 2,
    name: "ben",
    country:"UK"
  },
  {
    id: 3,
    name: "ram",
    country:"India"
  }
]
export default function ListRender() {
  return (
    <div>
      {myList.map((item) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.country}</li>
        </ul>
      ))}

<h1>filtered items</h1>
      {myList.filter((item) => item.id === 3).map((item1) => <ul>
        <li>{item1.name}</li>
        <li>{item1.country}</li>
</ul>)}
    </div>
  )
}
