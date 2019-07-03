import React from 'react';
import { shallow } from 'enzyme';
import Categories from './Categories';
import { testStore, findByTestAttr, getInitialState } from '../utils';

const setUp = (initialState = getInitialState()) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Categories store={store}/>).childAt(0).dive();
    return wrapper;
}

describe('Testing Categories Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('should render without errors', () => {
       const component = findByTestAttr(wrapper, 'categories');
       expect(component.length).toBe(1);
    });

    it('should render category', () => {
        const component = findByTestAttr(wrapper, 'category');
        expect(component.length).toBe(1);
    });

});