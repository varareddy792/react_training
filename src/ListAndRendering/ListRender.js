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
    </div>
  )
}
