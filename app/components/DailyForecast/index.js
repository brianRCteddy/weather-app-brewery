/**
 *
 * DailyForecast
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import styled from 'styled-components';

import { FormattedDate } from 'react-intl';
import { filterHourly } from '../../containers/WeatherForecastPage/actions';
import makeSelectWeatherForecastPage from '../../containers/WeatherForecastPage/selectors';
import HourlyForecast from '../HourlyForecast';

function DailyForecast(props) {
  const newDate = new Date(props.data.dt_txt);
  const getDayName = newDate.toString().split(' ');
  const linkUrl = getDayName[0];

  const celsiusMin = props.data.main.temp_min - 273.15;
  const celsiusMax = props.data.main.temp_max - 273.15;
  console.log(props);
  return (
    <div>
      <Link
        to={`/${linkUrl}`}
        style={{ color: 'black' }}
        onClick={filterHourly}
      >
        <FormattedDate
          value={new Date(props.data.dt * 1000)}
          weekday="short"
          hour="numeric"
          timeZoneName="short"
        />
        <br />
      </Link>
      <div>
        <span>Highest temp: {celsiusMax.toFixed(2)}&deg; </span>
        <span>Lowest temp: {celsiusMin.toFixed(2)}&deg;</span>
      </div>
      <div>
        <img
          src={`https://openweathermap.org/img/w/${
            props.data.weather[0].icon
          }.png`}
          alt={props.data.weather[0].description}
        />
        {props.data.weather[0].main}
      </div>
    </div>
  );
}

DailyForecast.propTypes = {
  data: PropTypes.object.isRequired,
};

export default memo(DailyForecast);
