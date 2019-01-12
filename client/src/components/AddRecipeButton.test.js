import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import AddRecipeButton from "./AddRecipeButton";

describe("Add Recipe Button", () => {
  it("matches snapshot", () => {
    const RecipeButtonWrapper = renderer
      .create(<AddRecipeButton onClick={() => {}} />)
      .toJSON();
    expect(RecipeButtonWrapper).toMatchSnapshot();
  });

  it("calls prop onClick when clicked", () => {
    const onClickSpy = jest.fn();
    const RecipeButtonWrapper = mount(<AddRecipeButton onClick={onClickSpy} />);
    RecipeButtonWrapper.find("button").simulate("click");
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
