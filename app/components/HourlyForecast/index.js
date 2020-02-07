/**
 *
 * HourlyForecast
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedDate } from 'react-intl';
import messages from './messages';

function HourlyForecast(props) {
  const newDate = new Date(props.hour.dt_txt);
  const getDayName = newDate.toString().split(' ');
  const linkUrl = getDayName[0];

  const celsiusMin = props.hour.main.temp_min - 273.15;
  const celsiusMax = props.hour.main.temp_max - 273.15;
  console.log(props);
  return (
    <div>
      <FormattedDate
        value={new Date(props.hour.dt * 1000)}
        hour="numeric"
        timeZoneName="short"
      />
      <div>
        <span>Highest temp: {celsiusMax.toFixed(2)}&deg; </span>
        <span>Lowest temp: {celsiusMin.toFixed(2)}&deg;</span>
      </div>
      <div>
        <img
          src={`https://openweathermap.org/img/w/${
            props.hour.weather[0].icon
          }.png`}
          alt={props.hour.weather[0].description}
        />
        {props.hour.weather[0].main}
      </div>
    </div>
  );
}

HourlyForecast.propTypes = {
  hour: PropTypes.object.isRequired,
};

export default memo(HourlyForecast);
