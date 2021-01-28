import React, { useContext } from 'react';

export default function RecipeIngredientEdit(props) {
  const {
    ingredient, 
    handleIngredientChange
  } = props

  // this is used to access the ingredient.id and original list of ingredients
  function handleChange(changes) {
    handleIngredientChange(ingredient.id, {...ingredient, ...changes})
  }

  return (
    <>
      <input 
        onInput={e => handleChange({ name: e.target.value })} // only have access to the value of the input here
        value={ingredient.name}
        className="recipe-edit__input" 
        type="text"/>
      <input 
        onInput={e => handleChange({ amount: e.target.value })}
        value={ingredient.amount}
        className="recipe-edit__input" 
        type="text"/>
      <button className="btn btn--danger">&times;</button>
    </>
  )
}
