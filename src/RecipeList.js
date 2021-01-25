import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({ recipes }) {
  console.log("RecipeList:",{recipes})

  return (
    <div>
    { recipes.map(recipe => {
        return ( 
          <Recipe 
            key={recipe.id} 
            {...recipe}
          /> 
        )
      })
    }
    </div>
  )
}
