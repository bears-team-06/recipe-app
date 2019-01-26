const validate = response => {
  const validateResponse = recipes => {
    return new Promise((resolve, reject) => {
      if (Array.isArray(recipes)) {
        if (recipes.length <= 0) {
          reject(new Error("Recipes are empty"));
        } else {
          resolve(recipes);
        }
      } else {
        reject(new Error("Response is in incorrect format"));
      }
    });
  };
  return response.json().then(validateResponse);
};

export { validate };
