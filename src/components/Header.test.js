import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAttr } from '../utils';

const setUp = () => {
    const wrapper = shallow(<Header />);
    return wrapper;
}

describe('Testing Header Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('should render without errors', () => {
       const component = findByTestAttr(wrapper, 'header');
       expect(component.length).toBe(1);
    });

});