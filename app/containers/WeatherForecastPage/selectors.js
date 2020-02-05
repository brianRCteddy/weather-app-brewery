import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the weatherForecastPage state domain
 */

const selectWeatherForecastPageDomain = state =>
  state.weatherForecastPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by WeatherForecastPage
 */

const makeSelectWeatherForecastPage = () =>
  createSelector(
    selectWeatherForecastPageDomain,
    substate => substate,
  );

export default makeSelectWeatherForecastPage;
export { selectWeatherForecastPageDomain };
