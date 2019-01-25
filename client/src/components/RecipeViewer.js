import React from "react";
import styled from "styled-components";
import DeleteRecipeButton from "./DeleteRecipeButton";

const StyledRecipeViewer = styled.div`
  background: ${props => props.theme.secondaryLight};
  width: 100%;
  flex-grow: 2;
  max-height: 100vh;
  overflow-y: scroll;
  color: ${props => props.theme.textColor};
`;
const TitleBar = styled.div`
  height: 10%;
  background: ${props => props.theme.secondary};
  padding-left: 1%;
  text-align: center;
  font-size: 3vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const RecipeBody = styled.div`
  padding: 20px;
`;

const RecipeTitle = styled.h2`
    display: inline-block;
    margin: 0;
    padding-left: 5%;
    font-size: 3vw;
`

const RecipeViewer = ({
  id,
  _id,
  ingredients,
  instructions,
  name,
  onDeleteClick
}) => {
  return (
    <StyledRecipeViewer>
      <TitleBar>
          <DeleteRecipeButton
            onClick={() => {
              onDeleteClick(_id);
            }}
          />
        <RecipeTitle>{name}</RecipeTitle>
      </TitleBar>
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
    return ingredients.map(ingredient => (
      <li key={ingredient.replace(" ", "")}>{ingredient}</li>
    ));
  }
};

export default RecipeViewer;
