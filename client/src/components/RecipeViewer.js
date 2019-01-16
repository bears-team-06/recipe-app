import React from "react";
import styled from 'styled-components';

const StyledRecipeViewer = styled.div`
  margin-left: : 400px;
  background: ${props => props.theme.secondaryLight};
  width: 100%;
  flex-grow: 2;
  max-height: 100vh;
  overflow-y: scroll;
  color: ${props => props.theme.textColor};
`;
const Title = styled.div`
  height: 50px;
  background: ${props => props.theme.secondary};
  padding-top: 20px;
  text-align: center;
  font-size: 24px;
`;
const RecipeBody = styled.div`
  padding: 20px;
`;

const RecipeViewer = ({ ingredients, instructions, name }) => {
  return (
    <StyledRecipeViewer>
      <Title>{name}</Title>
      <RecipeBody>
        <div className={"instructions"}>
          <h2>Ingredients:</h2>
          <ul>{IngredientLists(ingredients)}</ul>
        </div>
        <div className={"instructions"}>
            <h2>Instructions:</h2>
          <p>{instructions}</p>
        </div>
      </RecipeBody>
    </StyledRecipeViewer>
  );
};

const IngredientLists = ingredients => {
  if (ingredients && Array.isArray(ingredients)) {
    return ingredients.map(ingredient => <li key={ingredient.replace(" ","")}>{ingredient}</li>);
  }
};

export default RecipeViewer;
