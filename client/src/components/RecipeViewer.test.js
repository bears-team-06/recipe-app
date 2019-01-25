import React from "react";
import { shallow } from "enzyme";
import RecipeViewer from "./RecipeViewer";
describe("Recipe Viewer", () => {
  it("matches snapshot", () => {
    const RecipeViewerWrapper = shallow(<RecipeViewer />);
    expect(RecipeViewerWrapper).toMatchSnapshot();
  });
});
