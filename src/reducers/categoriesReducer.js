import types from '../actions/types';

export const INITIAL_STATE = {
    categories: []
}

export const categoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CATEGORIES_LOAD_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

export const loadingCategoriesReducer = (state = false, action) => {
    switch(action.type) {
        case types.CATEGORIES_LOAD:
            return true;
        case types.CATEGORIES_LOAD_SUCCESS:
        case types.CATEGORIES_LOAD_FAIL:
            return false;
        default:
            return state;
    }
}

export const errorCategoriesReducer = (state = null, action) => {
    switch(action.type) {
        case types.CATEGORIES_LOAD_FAIL:
            console.log(action);
            return action.payload;
        case types.CATEGORIES_LOAD:
        case types.CATEGORIES_LOAD_SUCCESS:
            return null;
        default:
            return state;
    }
}