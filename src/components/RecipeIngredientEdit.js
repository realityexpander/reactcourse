import React from 'react'

export default function RecipeIngredientEdit({ingredient}) {
  return (
    <>
      <input 
        value={ingredient.name}
        className="recipe-edit__input" 
        type="text"/>
      <input 
        value={ingredient.amount}
        className="recipe-edit__input" 
        type="text"/>
      <button className="btn btn--danger">&times;</button>
    </>
  )
}
