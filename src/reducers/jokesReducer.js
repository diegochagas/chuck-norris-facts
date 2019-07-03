import types from '../actions/types';

export const jokesReducer = (state = [], action) => {
    switch(action.type) {
        case types.JOKE_LOAD_SUCCESS:
            let index = state.findIndex(joke => joke.id === action.payload.id);
            if (index === -1)
                return [...state, action.payload];
            return state;
        case types.JOKE_RESET:
            return [];
        default:
            return state;
    }
}

export const loadingJokesReducer = (state = null, action) => {
    switch(action.type) {
        case types.JOKE_LOAD:
            return true;
        case types.JOKE_LOAD_SUCCESS:
        case types.JOKE_LOAD_FAIL:
            return false;
        default:
            return state;
    }
}

export const errorJokesReducer = (state = null, action) => {
    switch(action.type) {
        case types.JOKE_LOAD_FAIL:
            return action.payload;
        case types.JOKE_LOAD:
        case types.JOKE_LOAD_SUCCESS:
            return null;
        default:
            return state;
    }
}