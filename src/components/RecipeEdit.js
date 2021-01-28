import React, { useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit.js'
import { RecipeContext } from './App'
import {v4 as uuid} from 'uuid';

export default function RecipeEdit({recipe}) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext)

  const {
    name,
    cookTime,
    instructions,
    servings,
    ingredients
  } = recipe

  // handleChange({name: 'New Name'})
  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes})
  }

  function handleIngredientChange(ingredientId, ingredient) {
    // console.log("handleIngredientChange:", ingredientId, {ingredient})
    const newIngredients = [...recipe.ingredients]
    const index = newIngredients.findIndex(r => r.id === ingredientId)
    newIngredients[index] = ingredient
    handleChange({ ingredients: newIngredients })
  }

  function handleIngredientAdd() {
    const newIngredient = { id:uuid(), name:'', amount:''}
    const newIngredients = [...recipe.ingredients, newIngredient]
    handleChange({ingredients: newIngredients})
  }

  function handleIngredientDelete(id) {
    const newIngredients = recipe.ingredients.filter( ingredient => ingredient.id !== id)
    handleChange({ingredients: newIngredients})
  }

  return (
    <div className="recipe-edit">
      <div className="recipe_edit__remove-button-container">
        <button 
          onClick={() => handleRecipeSelect(undefined) }
          className="btn recipe_edit__remove-button"
          >&times;
        </button>
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
          onInput={e => handleChange({ name: e.target.value })}
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
          onInput={e => handleChange({ cookTime: e.target.value })}
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
          onInput={e => handleChange({ servings: parseInt(e.target.value) || 1 })}
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
          onInput={e => handleChange({ instructions: e.target.value })}
          className="recipe-edit__input"/>
      </div>
      <br/>
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        { ingredients.map( (ingredient) => //{console.log(ingredient)} 
            <RecipeIngredientEdit 
              handleIngredientChange={handleIngredientChange}
              handleIngredientDelete={handleIngredientDelete}
              key={ingredient.id} 
              ingredient={ingredient} />
          ) 
        }
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button 
          onClick={ () => handleIngredientAdd() }
          className="btn btn--primary"
        >
          Add Ingredient
        </button>
      </div>
    </div>
  )
}
