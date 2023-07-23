import React from 'react'
import styles from './RecipeCard.css'


export default function RecipeCard({ title, ingredients, classes }) {
    return (
        <div className={`recipe-card ${classes}`}>
            <div className="card-header">
                <h2 className="card-title">{title}</h2>
            </div>
            <div className="card-body">
                <ul className="card-text">
                    {ingredients.split(',').map((ingr, i) => (
                        <li key={i}>{ingr}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
