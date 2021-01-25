import React from 'react'

export default function Ingredient({ name, amount }) {
  return (
    <>
      <span>{name}</span>:<span> </span>
      <span>{amount}</span>
    </>
  )
}
