'use client';
import React, { useRef, useState } from 'react'
import './CreateRecipe.css';
import { createRecipe } from '@/app/actions';
import { useRouter } from 'next/navigation';


export default function CreateRecipe() {
    const ingredientsInput = useRef();
    const [title, setTitle] = useState();
    const [ingredients, setIngredients] = useState([]);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title !== '' && ingredients.length > 0) {
            console.log("creating recipe.");
            createRecipe(title, ingredients);
            router.refresh();
        } else {
            setError("Please specify a title and ingredients.")
        }
    }

    const parseIngredients = () => {
        const val = ingredientsInput.current.value;
        if (val.includes(',')) {
            setIngredients(prevIngredients => [...prevIngredients, val.split(',')[0]]);
            ingredientsInput.current.value = ''; // reset the input field.
        }
    }

    const removeIngredient = (ingr) => {
        setIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient !== ingr))
    }

    return (
        <>
            <form action="#">
                <fieldset className="form-group">
                    <input type="text" name="title" id="title" className="form-control" placeholder="Enter a title" onChange={(e) => setTitle(e.target.value)} required />
                    <input
                        type="text"
                        name="ingredients"
                        id="ingredients"
                        className="form-control"
                        placeholder="Enter a comma-separated list of ingredients"
                        required
                        ref={ingredientsInput}
                        onChange={parseIngredients}
                    />
                    <div className="ingredients-list">
                        {ingredients.map((ingr, key) =>
                            <span key={key} className="ingredient-tag" onClick={() => removeIngredient(ingr)}>{ingr}</span>
                        )}
                    </div>

                    <div className="error-msg">
                        {error}
                    </div>
                </fieldset>

                <button className="btn btn-success" type='submit' onClick={handleSubmit}>
                    Create
                </button>
            </form>
        </>
    )
}
