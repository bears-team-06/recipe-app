const getRecipes = () => {
  return fetch("/api/recipes").then(response => {
    if (response.status !== 200) {
      throw new Error(
        "Looks like there was a problem. Status Code:" + response.status
      );
    }
    return Promise.resolve(response);
  });
};

const deleteRecipe = id => {
  return fetch(`/api/recipe/${id}`, {
    method: "delete"
  }).then(response => {
    if (response.status !== 200) {
      throw new Error(
        "Looks like there was a problem. Status Code:" + response.status
      );
    }
    return Promise.resolve(response);
  });
};

const addRecipe = (name, ingredients, instructions) => {
  return fetch("/api/recipe", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "post",
    body: JSON.stringify({ name, ingredients, instructions })
  }).then(response => {
    if (response.status !== 200) {
      throw new Error(
        "Looks like there was a problem. Status Code:" + response.status
      );
    }
    return Promise.resolve(response);
  });
}

export { getRecipes, deleteRecipe, addRecipe };
