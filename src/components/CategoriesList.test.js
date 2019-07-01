import React from 'react';
import { shallow } from 'enzyme';
import CategoriesList from './CategoriesList';
import { testStore, findByTestAttr } from '../utils';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<CategoriesList store={store}/>);
    return wrapper;
}

describe('Testing CategoriesList Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('should render without errors', () => {
       const component = findByTestAttr(wrapper, 'categories');
       expect(component.length).toBe(1);
    });

});