import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('sample test', () => {
    expect(2 + 2).toBe(4);
})

it('sample test for enzyme', () => {
    shallow(<App />);
});
