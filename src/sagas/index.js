import { all } from 'redux-saga/effects';
import watchCategoriesLoad from './categoriesSaga';
import watchJokeLoad from './randomJokeSaga';

export default function* rootSaga() {
    yield all([watchCategoriesLoad(), watchJokeLoad()]);
}