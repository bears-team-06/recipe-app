import React from 'react'
import styled from 'styled-components'

const RecipeList = ({ recipes, onClick }) => {
    if (recipes && Array.isArray(recipes)) {
        return recipes.map((recipe,index) => <StyledRecipeListItem key={recipe.replace(" ","")} onClick={() => onClick(index)}>{recipe}</StyledRecipeListItem>);
    }
}

const StyledRecipeListItem = styled.li`
  font-size: 20px;
  list-style: none;
  padding: 5px;
  white-space: nowrap;
`

const RecipeNavigator = (props) => {
    return (
        <List>
            <RecipeList recipes={props.recipes} onClick={props.onClick}/>
        </List>
    )
}

const List = styled.ul`
  width: auto;
  margin: 10px;
`



export default RecipeNavigator;

