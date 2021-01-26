import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList({ ingredients }) {
  const ingredientElements = ingredients.map(ingredient => {
    return ( 
      <div key={ingredient.id}>
      <Ingredient key={ingredient.id} {...ingredient}/>
      <br/>
      </div>
    )
  })

  return (
    <div>
      { ingredientElements }
    </div>
  )
}
