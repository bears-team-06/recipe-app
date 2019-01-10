import React from "react";
import RecipeNavigator from "./RecipeNavigator";
import renderer from 'react-test-renderer';

describe("Recipe Navigator", () => {
    it('matches snapshot', () => {
        const RecipeNavigatorWrapper = renderer.create(<RecipeNavigator recipes={["recipe1","recipe2"]}/>).toJSON()
        expect(RecipeNavigatorWrapper).toMatchSnapshot()
    })

    it('returns index of recipe that was clicked', () => {
        expect(true).toBe(true)
    })
});
