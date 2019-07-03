import React from 'react';
import { shallow } from 'enzyme';
import Jokes from './Jokes';
import { testStore, findByTestAttr, getInitialState } from '../utils';

const setUp = (initialState = getInitialState()) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Jokes store={store} />).childAt(0).dive();
    return wrapper;
}

describe('Testing Jokes Component', () => {
    let wrapper;
    let classInstance;
    beforeEach(() => {
        wrapper = setUp();
        classInstance = wrapper.instance();
    });

    it('should render without errors', () => {
       const component = findByTestAttr(wrapper, 'jokes');
       expect(component.length).toBe(1);
    });

    it('should render joke list', () => {
        const component = findByTestAttr(wrapper, 'joke');
        expect(component.length).toBe(1);
    });

    describe('formatDate method', () => {

        it('should shown the correct date', () => {
            const stringDate = "2016-05-01 10:51:41.584544"
            const formatedDate = classInstance.formatDate(stringDate);
            expect(formatedDate).toEqual("1-MAY-2016 10:51:41");
        });

        it('should return empty if no value was passed', () => {
            const formatedDate = classInstance.formatDate();
            expect(formatedDate).toEqual("");
        });

        it('should return empty if an invalid value was passed', () => {
            const formatedDate = classInstance.formatDate("d");
            expect(formatedDate).toEqual("");
        });
        
    });

});