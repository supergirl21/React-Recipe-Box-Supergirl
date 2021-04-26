import React from 'react';
import AccRecipe from './AccRecipe';


const AccordionRecipes = ({recipes, onDelete, onEdit}) =>{
 
    return (
        <div className='homecontainer' >
          {recipes.map(recipe => {
              return (
              <AccRecipe key={recipe.id} recipe={recipe} onDelete={onDelete} onEdit={onEdit}/>
              )
              })} 
             
        </div>
      )
}

export default AccordionRecipes;