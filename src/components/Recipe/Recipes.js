import React, { useState } from "react";


const Recipe = ({ title, calories, image, ingredients }) => {
    const [show, setShow] = useState(false)
    return (
        <div className={'recipe'}>
            <h1>{title}</h1>
            <p>Calories : {calories}</p>
            <img className={'image'} src={image} alt="" />
            {show ? <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol> : ''}
            <button onClick={() => setShow(!show)}>ingredients</button>

        </div>
    );

}
export default Recipe;
