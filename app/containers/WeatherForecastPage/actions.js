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
} from './constants';

export function filterDaily(data) {
  return {
    type: FILTER_DAILY_FORECAST_DATA,
    data,
  };
}

export function filterHourly(index, hourlyData) {
  return {
    type: FILTER_HOURLY_FORECAST_DATA,
    index,
    hourlyData,
  };
}

export function successFetch(data) {
  return {
    type: SUCCESS_FETCH_FORECAST_DATA,
    data,
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
