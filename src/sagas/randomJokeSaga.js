import { call, put, takeLatest } from 'redux-saga/effects';
import { randomJoke } from '../apis/ChuckNorrisAPI';
import types from '../actions/types'; 
import { setJoke, setErrorJoke } from '../actions';

function* handleJokeLoad(action) {
    try {
        const response = yield call(randomJoke, action.payload);
        yield put(setJoke(response.data));
    } catch (error) {
        yield put(setErrorJoke(error.toString()));
    }
}

export default function* watchJokeLoad() {
    yield takeLatest(types.JOKE_LOAD, handleJokeLoad);
}