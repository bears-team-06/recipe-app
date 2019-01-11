/* global fail */
import { getRecipes } from "./request";

describe("get recipes", () => {
  it("requests recipes from /api/recipes", () => {
    fetch = fetch = jest.fn(
      () => new Promise(resolve => resolve({ status: 200 }))
    );
    getRecipes()
      .then()
      .catch(() => fail("this should not have been called"));
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("/api/recipes");
  });
  it("throws an error if status code is not 200", () => {
      fetch = fetch = jest.fn(
          () => new Promise(resolve => resolve({ status: 201 }))
      );
      expect(getRecipes()).rejects.toThrowError("Looks like there was a problem. Status Code:201")
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith("/api/recipes");
  });
});
