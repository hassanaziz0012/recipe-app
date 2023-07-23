import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'

export default function Recipes({ recipes }) {
    return (
        <div className='recipes-list row'>
            {recipes.map((recipe, i) => (
                <RecipeCard title={recipe.title} ingredients={recipe.ingredients} classes="col-lg-4" key={i} />
            ))}
        </div>
    )
}
