import React from "react";
import styled from "styled-components";

const RecipeList = ({ recipes, onClick, seclectedRecipe }) => {
  if (recipes && Array.isArray(recipes)) {
    return recipes.map((recipe, index) => (
      <StyledRecipeListItem
        className={`recipeItem-${index} ${
          index === seclectedRecipe ? "selected-recipe" : ""
        }`}
        key={recipe.replace(" ", "")}
        onClick={() => onClick(index)}
      >
        {recipe}
      </StyledRecipeListItem>
    ));
  }
};

const List = styled.ul`
  width: 25vw;
  height: 95vh;
  padding: 20px;
  margin-top: 0;
  background: ${props => props.theme.primaryLight};
  color: ${props => props.theme.textColor};
  flex-grow: 1;
  overflow-y: scroll;
`;
const StyledRecipeListItem = styled.li`
  font-size: 20px;
  list-style: none;
  padding: 5px;
  border-bottom: 1px solid ${props => props.theme.textColor};

  &:hover {
    background: ${props => props.theme.secondaryLight};
  }
  &.selected-recipe {
    background: ${props => props.theme.secondary};
  }
`;
const AddButtonWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  left: 23vw;
`;

const RecipeNavigator = props => {
  return (
    <div>
      <List>
        <RecipeList
          recipes={props.recipes}
          onClick={props.onClick}
          seclectedRecipe={props.selectedRecipe}
        />
      </List>
      <AddButtonWrapper>{props.children}</AddButtonWrapper>
    </div>
  );
};

export default RecipeNavigator;
