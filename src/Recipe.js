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
    <div>
      <div>
        <h3 style={{display:"inline"}}>{name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:<br/></span>
        <div>{instructions}</div>
      </div>
      <div>
        <span>Ingredients:<br/></span>
        <IngredientList ingredients={ingredients}/>
      </div>
      <br/>
    </div>
  )
}
