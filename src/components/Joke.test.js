import React from 'react';
import { shallow } from 'enzyme';
import Joke from './Joke';
import { testStore, findByTestAttr } from '../utils';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Joke store={store}/>).childAt(0).dive();
    return wrapper;
}

describe('Testing Joke Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('should render without errors', () => {
       const component = findByTestAttr(wrapper, 'joke');
       expect(component.length).toBe(1);
    });

});