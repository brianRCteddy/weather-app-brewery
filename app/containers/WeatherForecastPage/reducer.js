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

let filteredDaily = [];
const dateToday = new Date();

const addDays = (dateNow, numOfDays) => {
  const date = new Date(dateNow);
  date.setDate(date.getDate() + numOfDays);
  return date;
};

// const firstDay = addDays(dateToday, 1);
// const secondDay = addDays(dateToday, 2);
// const thirdDay = addDays(dateToday, 3);
// const fourthDay = addDays(dateToday, 4);
// const fifthDay = addDays(dateToday, 5);

const appendZero = n => {
  if (n <= 9) {
    return `0${n}`;
  }
  return n;
};

// put the function of transformDate to addDays
const transformDate = fullDate => {
  const formattedDate = `${fullDate.getFullYear()}-${appendZero(
    fullDate.getMonth(),
  )}-${appendZero(fullDate.getDate())}`;
  return formattedDate;
};

export const initialState = {
  weatherData: {},
  dailyData: [],
  hourlyData: {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
  },
  isLoading: false,
  error: null,
};

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
        draft.hourlyData[0] = action.data.list.filter(reading =>
          reading.dt_txt.includes(
            transformDate(addDays(dateToday, action.index + 1)),
          ),
        );
        draft.hourlyData[1] = action.data.list.filter(reading =>
          reading.dt_txt.includes(
            transformDate(addDays(dateToday, action.index + 1)),
          ),
        );
        draft.hourlyData[2] = action.data.list.filter(reading =>
          reading.dt_txt.includes(
            transformDate(addDays(dateToday, action.index + 1)),
          ),
        );
        draft.hourlyData[3] = action.data.list.filter(reading =>
          reading.dt_txt.includes(
            transformDate(addDays(dateToday, action.index + 1)),
          ),
        );
        draft.hourlyData[4] = action.data.list.filter(reading =>
          reading.dt_txt.includes(
            transformDate(addDays(dateToday, action.index + 1)),
          ),
        );
        break;
    }
  });

export default weatherForecastPageReducer;
