import React from "react";
import RecipeNavigator from "./RecipeNavigator";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

describe("Recipe Navigator", () => {
  it("matches snapshot", () => {
    const RecipeNavigatorWrapper = renderer
      .create(<RecipeNavigator recipes={["recipe1", "recipe2"]} />)
      .toJSON();
    expect(RecipeNavigatorWrapper).toMatchSnapshot();
  });

  it("matches snapshot when child elements are passed", () => {
    const RecipeNavigatorWrapper = renderer
      .create(
        <RecipeNavigator recipes={["recipe1", "recipe2"]}>
          <h1>child element</h1>
        </RecipeNavigator>
      )
      .toJSON();
    expect(RecipeNavigatorWrapper).toMatchSnapshot();
  });

  it("returns index of recipe that was clicked", () => {
    const clickHandlerSpy = jest.fn();
    const RecipeNavigatorWrapper = mount(
      <RecipeNavigator
        recipes={["recipe1", "recipe2"]}
        onClick={clickHandlerSpy}
      />
    );
    RecipeNavigatorWrapper.find("li.recipeItem-1").simulate("click");
    expect(clickHandlerSpy).toHaveBeenCalledTimes(1);
    expect(clickHandlerSpy).toHaveBeenCalledWith(1);
  });

  it("sets name of each recipe item correctly", () => {
    const recipes = ["recipe1", "recipe2"];
    const RecipeNavigatorWrapper = mount(<RecipeNavigator recipes={recipes} />);
    expect(RecipeNavigatorWrapper.find("li.recipeItem-0").text()).toBe(
      recipes[0]
    );
    expect(RecipeNavigatorWrapper.find("li.recipeItem-1").text()).toBe(
      recipes[1]
    );
  });
});
