import { combineReducers } from 'redux';
import { categoriesReducer, loadingCategoriesReducer, errorCategoriesReducer } from './categoriesReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    isLoading: loadingCategoriesReducer,
    error: errorCategoriesReducer

});

export default rootReducer;