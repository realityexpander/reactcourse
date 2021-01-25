import React from 'react'

export default function Recipe( recipe ) {
  return (
    <div>
      <div>
        <h3>{recipe.name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook time:</span>
        <span>{recipe.cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{recipe.servings}</span>
      </div>
      <div>
        <span>Instructions:<br/></span>
        <div>{recipe.instructions}</div>
      </div>
    </div>
  )
}
