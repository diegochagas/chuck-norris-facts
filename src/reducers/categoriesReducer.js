import types from '../actions/types';

export const INITIAL_CATEGORIES_STATE = {
    categories: []
}

export const categoriesReducer = (state = INITIAL_CATEGORIES_STATE, action) => {
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
};