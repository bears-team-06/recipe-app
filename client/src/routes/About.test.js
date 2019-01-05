import {shallow} from 'enzyme'
import React from 'react';
import About from "./About";

it('with text and is disabled true', () => {
    expect(shallow(<About />)).toMatchSnapshot();
})