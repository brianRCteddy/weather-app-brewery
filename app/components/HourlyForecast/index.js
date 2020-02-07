/**
 *
 * HourlyForecast
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import styled from 'styled-components';

import { FormattedDate } from 'react-intl';

import makeSelectWeatherForecastPage from '../../containers/WeatherForecastPage/selectors';

function HourlyForecast(props) {
  console.log(props.weatherForecastPage);
  const day1 = props.weatherForecastPage.hourlyData[0].map(data => {
    const celsiusMin = data.main.temp_min - 273.15;
    const celsiusMax = data.main.temp_max - 273.15;
    return (
      <div key={data.dt}>
        <FormattedDate
          value={new Date(data.dt * 1000)}
          hour="numeric"
          timeZoneName="short"
        />
        <span>Highest temp: {celsiusMax.toFixed(2)}&deg; </span>
        <span>Lowest temp: {celsiusMin.toFixed(2)}&deg;</span>
        <img
          src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          alt={data.weather[0].description}
        />
        {data.weather[0].main}
      </div>
    );
  });

  return <div>{day1}</div>;
}

const mapStateToProps = createStructuredSelector({
  weatherForecastPage: makeSelectWeatherForecastPage(),
});

const withConnect = connect(mapStateToProps);

HourlyForecast.propTypes = {
  weatherForecastPage: PropTypes.object.isRequired,
};

export default compose(
  withConnect,
  memo,
)(HourlyForecast);
