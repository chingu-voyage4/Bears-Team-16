import React from 'react';
import enzyme, { shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { Form, Text, Checkbox, NestedField, Select } from "react-form";

import AddRecipe from './AddRecipe';

enzyme.configure({ adapter: new Adapter() });

describe(`<AddRecipe />`, () => {
  it(`should have a heading with 'Add Recipe'`, () => {
    const wrapper = shallow(<AddRecipe />);
    expect(wrapper.contains(<h1>Add Recipe</h1>)).toEqual(true);
    expect(wrapper.find(`h1`).length).toEqual(1);
  });

  it(`should have a From element`, () => {
    const wrapper = shallow(<AddRecipe />);
    expect(wrapper.find(Form).length).toEqual(1);
  });

  it(`should have a form element`, () => {
    const wrapper = shallow(<AddRecipe />);
    expect(wrapper.find(Form).length).toEqual(1);
  });

  it(`should have a title input`, () => {
    const wrapper = mount(<AddRecipe />);
    expect(wrapper.find(`[htmlFor="title"]`).length).toEqual(1);
    expect(wrapper.find(`input#title`).length).toEqual(1);
  });

  it(`should have a portions input`, () => {
    const wrapper = mount(<AddRecipe />);
    expect(wrapper.find(`[htmlFor="portions"]`).length).toEqual(1);
    expect(wrapper.find(`input#portions`).length).toEqual(1);
  });

  it(`should have a cooktime input`, () => {
    const wrapper = mount(<AddRecipe />);
    expect(wrapper.find(`[htmlFor="cooktime"]`).length).toEqual(1);
    expect(wrapper.find(`input#cooktime`).length).toEqual(1);
  });

  it(`should have a NestedField with a class of recipe-categories`, () => {
    const wrapper = mount(<AddRecipe />);
    expect(wrapper.find(NestedField).length).toEqual(2);
    expect(wrapper.find(`NestedField.recipe-categories`).length).toEqual(1);
  });

  it(`should have a NestedField with Checkboxes`, () => {
    const wrapper = mount(<AddRecipe />);
    expect(wrapper.find(Checkbox).length).toEqual(4);
    expect(wrapper.find(`[htmlFor="beef"]`).length).toEqual(1);
    expect(wrapper.find(`input#beef`).length).toEqual(1);
    expect(wrapper.find(`[htmlFor="fish"]`).length).toEqual(1);
    expect(wrapper.find(`input#fish`).length).toEqual(1);
    expect(wrapper.find(`[htmlFor="pork"]`).length).toEqual(1);
    expect(wrapper.find(`input#pork`).length).toEqual(1);
    expect(wrapper.find(`[htmlFor="pasta"]`).length).toEqual(1);
    expect(wrapper.find(`input#pasta`).length).toEqual(1);
  });

  it(`should have ingredients`, () => {
    const wrapper = mount(<AddRecipe />);
    expect(wrapper.find(`.ingredients`).length).toEqual(1);
    expect(wrapper.find(`input#ingredient-name-initial`).length).toEqual(1);
    expect(wrapper.find(`input#ingredient-amount-initial`).length).toEqual(1);
    expect(wrapper.find(`select#ingredient-unit-initial`).length).toEqual(1);
  });

  it(`should have steps`, () => {
    const wrapper = mount(<AddRecipe />);
    expect(wrapper.find(`.steps`).length).toEqual(1);
    expect(wrapper.find(`input#stepInitial`).length).toEqual(1);
  });
});
