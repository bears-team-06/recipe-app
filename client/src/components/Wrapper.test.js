import React from "react";
import renderer from "react-test-renderer";
import Wrapper from "./Wrapper"

describe("Wrapper", () => {
    it("matches snapshot", () => {
        const WrapperVar = renderer
            .create(<Wrapper/>)
            .toJSON();
        expect(WrapperVar).toMatchSnapshot();
    });
})