import React from 'react'

const RecipeList = ({ recipes, onClick }) => {
    if (recipes && Array.isArray(recipes)) {
        return recipes.map((recipe,index) => <li onClick={() => onClick(index)}>{recipe}</li>);
    }
}

const RecipeNavigator = (props) => {
    return (
        <ul>
            <RecipeList recipes={props.recipes} onClick={props.onClick}/>
        </ul>
    )
}

export default RecipeNavigator;

