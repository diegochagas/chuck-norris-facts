import types from './types';

export const loadCategories = () => ({
    type: types.CATEGORIES_LOAD
});

export const setCategories = categories => ({
    type: types.CATEGORIES_LOAD_SUCCESS,
    payload: categories
});

export const setError = error => ({
    type: types.CATEGORIES_LOAD_FAIL,
    payload: error
});

export const loadJoke = category => ({
    type: types.JOKE_LOAD,
    payload: category
});

export const setJoke = joke => ({
    type: types.JOKE_LOAD_SUCCESS,
    payload: joke
});

export const setErrorJoke = error => ({
    type: types.JOKE_LOAD_FAIL,
    payload: error
});