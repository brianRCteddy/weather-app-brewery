/**
 *
 * DailyForecast
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import styled from 'styled-components';

import { FormattedDate } from 'react-intl';
import { filterHourly } from '../../containers/WeatherForecastPage/actions';
import makeSelectWeatherForecastPage from '../../containers/WeatherForecastPage/selectors';
import HourlyForecast from '../HourlyForecast';

function DailyForecast(props) {
  const newDate = new Date(props.day.dt_txt);
  const getDayName = newDate.toString().split(' ');
  const linkUrl = getDayName[0];

  const celsiusMin = props.day.main.temp_min - 273.15;
  const celsiusMax = props.day.main.temp_max - 273.15;

  return (
    <div>
      {/* <Link to={`/${linkUrl}`} style={{ color: 'black' }}> */}
      {/* <div
          onClick={() => props.filterHourly(props.weatherForecastPage.dataList)}
        /> */}
      <FormattedDate
        value={new Date(props.day.dt * 1000)}
        weekday="short"
        hour="numeric"
        timeZoneName="short"
      />
      <br />
      {/* </Link> */}
      <div>
        <span>Highest temp: {celsiusMax.toFixed(2)}&deg; </span>
        <span>Lowest temp: {celsiusMin.toFixed(2)}&deg;</span>
      </div>
      <div>
        <img
          src={`https://openweathermap.org/img/w/${
            props.day.weather[0].icon
          }.png`}
          alt={props.day.weather[0].description}
        />
        {props.day.weather[0].main}
        <button
          onClick={() =>
            props.filterHourly(props.weatherForecastPage.dataList, props.index)
          }
          type="button"
        >
          Filter Hourly
        </button>
      </div>
      {props.weatherForecastPage.hourlyData[props.index].map(hour => (
        <HourlyForecast key={hour.dt} hour={hour} />
      ))}
    </div>
  );
}

DailyForecast.propTypes = {
  day: PropTypes.object.isRequired,
  filterHourly: PropTypes.func.isRequired,
  weatherForecastPage: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  weatherForecastPage: makeSelectWeatherForecastPage(),
});

const mapDispatchToProps = dispatch => ({
  filterHourly: data => dispatch(filterHourly(data)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DailyForecast);
