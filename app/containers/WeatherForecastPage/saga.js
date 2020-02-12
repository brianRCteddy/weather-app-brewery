/* eslint-disable no-unused-vars */
import { put, select, takeLatest, call } from 'redux-saga/effects';

import { OPEN_WEATHER_BASE, OPEN_WEATHER_API_KEY } from '../../config';

import { successFetch, errorFetch, filterDaily, filterHourly } from './actions';
import { makeSelectCity } from './selectors';
import { INIT_FETCH_FORECAST_DATA } from './constants';
import request from '../../utils/request';

// Individual exports for testing

function* fetchForecastData() {
  const city = yield select(makeSelectCity());
  const url = `${OPEN_WEATHER_BASE}/forecast?q=${city}&APPID=${OPEN_WEATHER_API_KEY}`;
  // const city = 'New York';
  try {
    const data = yield call(request, url);
    yield put(successFetch(data, city));
    yield put(filterDaily(data.list));
    yield put(filterHourly(data.list));
  } catch (error) {
    yield put(errorFetch());
  }
}

export default function* weatherForecastPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(INIT_FETCH_FORECAST_DATA, fetchForecastData);
}
