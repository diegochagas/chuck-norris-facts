import { combineReducers } from 'redux';
import { categoriesReducer, loadingCategoriesReducer, errorCategoriesReducer } from './categoriesReducer';
import { jokesReducer, loadingJokesReducer, errorJokesReducer } from './jokesReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    isLoadingCategories: loadingCategoriesReducer,
    errorCategories: errorCategoriesReducer,
    jokes: jokesReducer,
    isLoadingJokes: loadingJokesReducer,
    errorJokes: errorJokesReducer
});

export default rootReducer;