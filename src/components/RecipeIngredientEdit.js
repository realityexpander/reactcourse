import React, { useContext } from 'react';

export default function RecipeIngredientEdit(props) {
  const {
    ingredient, 
    handleIngredientChange
  } = props

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, {...ingredient, ...changes})
  }

  return (
    <>
      <input 
        onInput={e => handleChange({ name: e.target.value })}
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
