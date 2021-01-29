import React from 'react';

export default function RecipeIngredientEdit(props) {
  const {
    ingredient, 
    handleIngredientChange,
    handleIngredientDelete
  } = props


  // this is used to access the ingredient.id and original list of ingredients
  function handleChange(changes) {
    handleIngredientChange(ingredient.id, {...ingredient, ...changes})
  }

  return (
    <>
      <input 
        onChange={e => handleChange({ name: e.target.value })} // only have access to the VALUE of the input here, not id
        value={ingredient.name}
        className="recipe-edit__input"
        type="text"/>
      <input 
        onChange={e => handleChange({ amount: e.target.value })}
        value={ingredient.amount}
        className="recipe-edit__input" 
        type="text"/>
      <button 
        onClick={ () => handleIngredientDelete(ingredient.id) }
        className="btn btn--danger"
      >
        &times;
      </button>
    </>
  )
}
