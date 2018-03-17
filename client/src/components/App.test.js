import React from 'react';
import enzyme, { mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { Home } from "./layout/Home";

enzyme.configure({ adapter: new Adapter() });

it('renders correct routes', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/']} initialIndex={0}><App /></MemoryRouter>);
    expect(wrapper.contains({ Home })).toBe(true);
})
