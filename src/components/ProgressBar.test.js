import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';
import { findByTestAttr } from '../utils';

const setUp = () => {
    const wrapper = shallow(<ProgressBar />);
    return wrapper;
}

describe('Testing ProgressBar Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('should render without errors', () => {
       const component = findByTestAttr(wrapper, 'progress');
       expect(component.length).toBe(1);
    });

});