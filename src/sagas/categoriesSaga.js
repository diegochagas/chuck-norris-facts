import { call, put, takeLatest } from 'redux-saga/effects';
import { categories } from '../apis/ChuckNorrisAPI';
import types from '../actions/types';
import { setCategories, setError } from '../actions';

function* handleCategoriesLoad() {
    try {
        const response = yield call(categories);
        yield put(setCategories(response.data));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchCategoriesLoad() {
    yield takeLatest(types.CATEGORIES_LOAD, handleCategoriesLoad);
}