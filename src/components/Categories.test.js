import React from 'react';
import { shallow } from 'enzyme';
import Categories from './Categories';
import { testStore, findByTestAttr } from '../utils';

const setUp = (initialState = {}) => {
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

});