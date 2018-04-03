import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { Form, Text, Checkbox, NestedField, Select } from "react-form";

import AddRecipe from './AddRecipe';

enzyme.configure({ adapter: new Adapter() });
// test(`Should be 2`, () => {
//   expect(4 + 2).toBe(6);
//   expect(2 - 2).toBe(0);
//   expect(2 + 2).toBe(4);
// });

describe(`<AddRecipe />`, () => {
  it(`should have a heading with 'Add Recipe'`, () => {
    const wrapper = shallow(<AddRecipe />);
    expect(wrapper.contains(<h1>Add Recipe</h1>)).toEqual(true);
  });
  it(`should have a From element`, () => {
    const wrapper = shallow(<AddRecipe />);
    expect(wrapper.exists(<Form />)).toBe(true);
  });
  it(`should have a form element`, () => {
    const wrapper = shallow(<AddRecipe />);
    expect(wrapper.exists(<form className="recipe-form" />)).toBe(true);
  });
  it(`should have a title input`, () => {
    const wrapper = shallow(<AddRecipe />);
    expect(wrapper.exists(<Text id="title" />)).toBe(true);
  });
  it(`should have a portions input`, () => {
    const wrapper = shallow(<AddRecipe />);
    expect(wrapper.exists(<Text id="portions" />)).toBe(true);
  });
});
// it(`Fails`, () => {
//   expect(1).toBe(0);
// });

// test(`should behave...`, () => {
//   expect();
// });

// it(`should behave...`, () => {

// });
