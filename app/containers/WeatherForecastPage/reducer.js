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
  CHANGE_INDEX,
  SET_CITY,
} from './constants';

let filteredDaily = [];
const dateToday = new Date();

// logic for adding days to the current day for the next days forecast
const addDays = (dateNow, numOfDays) => {
  const date = new Date(dateNow);
  date.setDate(date.getDate() + numOfDays);
  return date;
};

// logic to append to leading zeroes on date
const appendZero = n => {
  if (n <= 9) {
    return `0${n}`;
  }
  return n;
};

// logic to transform the data from full newDate to "YYYY-MM-DD" ex. "2020-02-22"
const transformDate = fullDate => {
  const formattedDate = `${fullDate.getFullYear()}-${appendZero(
    fullDate.getMonth() + 1,
  )}-${appendZero(fullDate.getDate())}`;
  return formattedDate;
};

export const initialState = {
  city: '',
  weatherData: {},
  dataList: [],
  dailyData: [],
  index: null,
  hourlyData: {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
  },
  isLoading: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const weatherForecastPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_CITY:
        draft.city = action.city;
        break;
      case INIT_FETCH_FORECAST_DATA:
        draft.isLoading = true;
        break;

      case SUCCESS_FETCH_FORECAST_DATA:
        draft.weatherData = action.data;
        draft.dataList = action.data.list;
        draft.city = action.city;
        draft.isLoading = false;
        draft.error = false;
        break;

      case ERROR_FETCH_FORECAST_DATA:
        draft.error = true;
        draft.isLoading = false;
        break;

      case FILTER_DAILY_FORECAST_DATA:
        // put logic here
        filteredDaily = action.data.filter(reading =>
          reading.dt_txt.includes('00:00:00'),
        );
        draft.dailyData = filteredDaily;
        break;

      case FILTER_HOURLY_FORECAST_DATA:
        // put logic here
        draft.hourlyData[action.index] = action.data.filter(reading =>
          reading.dt_txt.includes(
            transformDate(addDays(dateToday, action.index + 1)),
          ),
        );

        break;

      case CHANGE_INDEX:
        draft.index = action.index;
        break;
    }
  });

export default weatherForecastPageReducer;
