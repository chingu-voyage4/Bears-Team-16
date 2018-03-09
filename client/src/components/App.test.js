import React from 'react';
import enzyme, { shallow } from 'enzyme';
import App from './App';
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });


it(`sample test`, () => {
  expect(2 + 2).toBe(4);
});

it(`sample test for enzyme`, () => {
  shallow(<App />);
});
