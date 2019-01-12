import React from 'react'
import {shallow} from 'enzyme'
import RecipeModal from "./RecipeModal";
describe("Recipe Modal", () => {
  it("matches snapshot", () => {
      const RecipeModalWrapper = shallow(<RecipeModal/>)
      expect(RecipeModalWrapper).toMatchSnapshot()
  });

  it("calls callback on clicking button", () => {
      const closeModalSpy = jest.fn()
      const RecipeModalWrapper = shallow(<RecipeModal closeModal={closeModalSpy}/>)
      RecipeModalWrapper.find('button').simulate('click')
      expect(closeModalSpy).toHaveBeenCalledTimes(1)
  });
});
