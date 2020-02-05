/*
 *
 * WeatherForecastPage reducer
 *
 */
import produce from 'immer';
import {
  INIT_FETCH_FORECAST_DATA,
  SUCCESS_FETCH_FORECAST_DATA,
  ERROR_FETCH_FORECAST_DATA,
  FILTER_DAILY_FORECAST_DATA,
  FILTER_HOURLY_FORECAST_DATA,
} from './constants';

export const initialState = {
  weatherData: {},
  dailyData: [],
  hourlyData: [],
  isLoading: false,
  error: null,
};

let filteredDaily = [];

/* eslint-disable default-case, no-param-reassign */
const weatherForecastPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INIT_FETCH_FORECAST_DATA:
        draft.isLoading = true;
        break;

      case SUCCESS_FETCH_FORECAST_DATA:
        draft.weatherData = action.data;
        draft.isLoading = false;
        draft.error = false;
        break;

      case ERROR_FETCH_FORECAST_DATA:
        draft.error = true;
        draft.isLoading = false;
        break;

      case FILTER_DAILY_FORECAST_DATA:
        // put logic here
        filteredDaily = action.data.list.filter(reading =>
          reading.dt_txt.includes('00:00:00'),
        );
        draft.dailyData = filteredDaily;
        break;

      case FILTER_HOURLY_FORECAST_DATA:
        // put logic here
        break;
    }
  });

export default weatherForecastPageReducer;
