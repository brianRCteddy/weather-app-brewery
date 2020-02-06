import { take, call, put, select } from 'redux-saga/effects';

import {
  successFetch,
  errorFetch,
  initFetch,
  filterDaily,
  filterHourly,
} from './actions';

// Individual exports for testing
export default function* weatherForecastPageSaga() {
  // See example in containers/HomePage/saga.js
  yield put(initFetch());

  try {
    const url =
      'https://api.openweathermap.org/data/2.5/forecast?q=mandaluyong,ph&APPID=1ac7b28236178180729716f442627ad1';
    const response = yield fetch(url);
    const data = yield response.json();
    yield put(successFetch(data));
    yield put(filterDaily(data));
  } catch (error) {
    yield put(errorFetch());
  }
}
