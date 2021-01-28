import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit.js'

export default function RecipeEdit({recipe}) {

const {
  name,
  cookTime,
  instructions,
  servings,
  ingredients
} = recipe

  return (
    <div className="recipe-edit">
      <div className="recipe_edit__remove-button-container">
        <button className="btn recipe_edit__remove-button">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label 
          htmlFor="name"
          className="recipe-edit__label" >
          Name
        </label>
        <input 
          type="text" 
          name="name" 
          id="name"
          value={name}
          className="recipe-edit__input" />
        <label 
          htmlFor="cookTime"
          className="recipe-edit__label" >
          Cook Time
        </label>
        <input 
          type="text"   
          name="cookTime" 
          id="cookTime" 
          value={cookTime}
          className="recipe-edit__input"/>
        <label 
          htmlFor="servings"
          className="recipe-edit__label">
          Servings
        </label>
        <input 
          type="number" 
          min="1" 
          name="servings" 
          id="servings" 
          value={servings}
          className="recipe-edit__input"/>
        <label 
          htmlFor="instructions"
          className="recipe-edit__label">
          Instructions
        </label>
        <textarea 
          type="text" 
          name="instructions" 
          id="instructions"
          value={instructions} 
          className="recipe-edit__input"/>
      </div>
      <br/>
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        { ingredients.map( (ingredient) => 
            <RecipeIngredientEdit 
              key={ingredient.id} 
              ingredient={ingredient} />
            ) 
        }
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary">Add Ingredient</button>
      </div>
    </div>
  )
}
