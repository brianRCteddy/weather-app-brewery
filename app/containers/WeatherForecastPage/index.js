/**
 *
 * WeatherForecastPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectWeatherForecastPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { filterDaily } from './actions';

import DailyForecast from '../../components/DailyForecast';

export function WeatherForecastPage(props) {
  useInjectReducer({ key: 'weatherForecastPage', reducer });
  useInjectSaga({ key: 'weatherForecastPage', saga });
  console.log(props);

  return (
    <div>
      <Helmet>
        <title>WeatherForecastPage</title>
        <meta name="description" content="Description of WeatherForecastPage" />
      </Helmet>
      {props.weatherForecastPage.dailyData.map((day, index) => (
        <DailyForecast key={day.dt} index={index} data={day} />
      ))}
    </div>
  );
}

WeatherForecastPage.propTypes = {
  weatherForecastPage: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  weatherForecastPage: makeSelectWeatherForecastPage(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(WeatherForecastPage);
