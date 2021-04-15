import { getMusics } from '@services/musicApi';
import { put, call, takeLatest } from 'redux-saga/effects';
import { musicContainerCreators, musicContainerTypes } from './reducer';

const { REQUEST_GET_ITUNES_MUSICS } = musicContainerTypes;
const { successGetItunesMusics, failureGetItunesMusics } = musicContainerCreators;

export function* getItunesMusics(action) {
  const response = yield call(getMusics, action.searchQuery);
  const { data, ok } = response;

  if (ok) {
    yield put(successGetItunesMusics(data));
  } else {
    yield put(failureGetItunesMusics(data));
  }
}

// Individual exports for testing
export default function* musicContainerSaga() {
  yield takeLatest(REQUEST_GET_ITUNES_MUSICS, getItunesMusics);
}
