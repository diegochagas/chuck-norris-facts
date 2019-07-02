import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from './ErrorMessage';
import { findByTestAttr } from '../utils';

const setUp = () => {
    const wrapper = shallow(<ErrorMessage />);
    return wrapper;
}

describe('Testing ErrorMessage Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('should render without errors', () => {
       const component = findByTestAttr(wrapper, 'error');
       expect(component.length).toBe(1);
    });

});