import CheckPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test="${attr}"]`);
    return wrapper;
}

export const testStore = initialState => {
    const createStoreWithMiddleWare = applyMiddleware(createSagaMiddleware)(createStore);
    return createStoreWithMiddleWare(rootReducer, initialState);
}