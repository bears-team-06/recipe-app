/* global fail */
import { validate } from "./response";
describe("validate", () => {
  it("rejects with error when response is empty", () => {
    let response = createResponseWithValue([]);
    validate(response)
      .then(() => fail("should not have called then"))
      .catch(err => {
        expect(err.message).toBe("Recipes are empty");
      });
  });

  it("rejects with error when response is not an array", () => {
    let response = createResponseWithValue({});
    validate(response)
      .then(() => fail("should not have called then"))
      .catch(err => {
        expect(err.message).toBe("Response is in incorrect format");
      });
  });

  it("resolves response objects and gets json array of recipes", () => {
    const recipes = ["recipe1", "recipe2"];
    let response = createResponseWithValue(recipes);
    validate(response)
      .then(actualRecipes => expect(recipes).toEqual(actualRecipes))
      .catch(() => {
        fail("should not have called then");
      });
  });
});

function createResponseWithValue(value) {
  return {
    json() {
      return Promise.resolve(value);
    }
  };
}
