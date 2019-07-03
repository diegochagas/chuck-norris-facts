import React from 'react';
import { shallow } from 'enzyme';
import WarningMessage from './WarningMessage';
import { findByTestAttr } from '../utils';

const setUp = () => {
    const wrapper = shallow(<WarningMessage />);
    return wrapper;
}

describe('Testing WarningMessage Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('should render without errors', () => {
       const component = findByTestAttr(wrapper, 'warning');
       expect(component.length).toBe(1);
    });

});