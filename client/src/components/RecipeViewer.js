import React from "react";

const RecipeViewer = ({ id, ingredients, instructions, name }) => {
  return (
    <div>
      <div className={"title"}>{name}</div>
      <div className={"instructions"}>
        <h2>Ingredients:</h2>
        <ul>{IngredientLists(ingredients)}</ul>
      </div>
      <div className={"instructions"}>
          <h2>Instructions:</h2>
        <p>{instructions}</p>
      </div>
    </div>
  );
};

const IngredientLists = ingredients => {
  if (ingredients && Array.isArray(ingredients)) {
    return ingredients.map(ingredient => <li key={ingredient.replace(" ","")}>{ingredient}</li>);
  }
};

export default RecipeViewer;
