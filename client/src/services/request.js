const getRecipes = () => {
  return fetch("/api/recipes")
    .then(response => {
      if (response.status !== 200) {
        throw new Error(
          "Looks like there was a problem. Status Code:" + response.status
        );
      }
      return Promise.resolve(response);
    })
};

export { getRecipes };
