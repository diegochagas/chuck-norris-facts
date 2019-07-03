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

export const getInitialState = () => {
    const INITIAL_STATE = {
        categories: [""], 
        isLoadingCategories: false, 
        errorCategories: null, 
        jokes: [
            {
                categories: [""], 
                created_at: "",
                icon_url: "",
                id: "",
                updated_at: "",
                url: "",
                value: ""
            }
        ], 
        isLoadingJokes: false, 
        errorJokes: null
    };
    return INITIAL_STATE;
}