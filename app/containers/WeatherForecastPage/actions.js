/*
 *
 * WeatherForecastPage actions
 *
 */

import {
  FILTER_DAILY_FORECAST_DATA,
  FILTER_HOURLY_FORECAST_DATA,
  INIT_FETCH_FORECAST_DATA,
  SUCCESS_FETCH_FORECAST_DATA,
  ERROR_FETCH_FORECAST_DATA,
  CHANGE_INDEX,
  SET_CITY,
} from './constants';

export function setCityLocation(city) {
  return {
    type: SET_CITY,
    city,
  };
}

export function filterDaily(data) {
  return {
    type: FILTER_DAILY_FORECAST_DATA,
    data,
  };
}

export function filterHourly(data) {
  return {
    type: FILTER_HOURLY_FORECAST_DATA,
    data,
  };
}

export function changeIndex(index) {
  return {
    type: CHANGE_INDEX,
    index,
  };
}

export function successFetch(data, city) {
  return {
    type: SUCCESS_FETCH_FORECAST_DATA,
    data,
    city,
  };
}

export function initFetch() {
  return {
    type: INIT_FETCH_FORECAST_DATA,
  };
}

export function errorFetch() {
  return {
    type: ERROR_FETCH_FORECAST_DATA,
  };
}
