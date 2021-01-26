import React from 'react'
import IngredientList from './IngredientList'

export default function Recipe( props ) {
  const {
    name, 
    cookTime, 
    servings, 
    instructions,
    ingredients
  } = props
  
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button className="btn btn--primary mr-1">Edit</button>
          <button className="btn btn--danger">Delete</button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook time:</span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:<br/></span>
        <div className="recipe__value recipe__instructions recipe__value--indented">{instructions}</div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients:<br/></span>
        <div className="recipe__value">
          <IngredientList ingredients={ingredients}/>
        </div>
      </div>
      <br/>
    </div>
  )
}

// style={{display:"inline"}