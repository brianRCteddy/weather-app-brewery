/**
 *
 * WeatherForecastPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectWeatherForecastPage, makeSelectCity } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { filterDaily } from './actions';

import DailyForecast from '../../components/DailyForecast';
import Search from '../../components/Search';
import Loading from '../../components/Loading';

export function WeatherForecastPage(props) {
  useInjectReducer({ key: 'weatherForecastPage', reducer });
  useInjectSaga({ key: 'weatherForecastPage', saga });

  return (
    <div>
      <Helmet>
        <title>WeatherForecastPage</title>
        <meta name="description" content="Description of WeatherForecastPage" />
      </Helmet>
      <h1>5 Day Weather Forecast</h1>
      {props.weatherForecastPage.isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <Search />
          <br />
          <br />
          <div>
            {props.weatherForecastPage.dailyData.map((day, index) => (
              <DailyForecast key={day.dt} index={index} day={day} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

WeatherForecastPage.propTypes = {
  weatherForecastPage: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  weatherForecastPage: makeSelectWeatherForecastPage(),
  city: makeSelectCity(),
});

const mapDispatchToProps = dispatch => ({
  filterDaily: data => dispatch(filterDaily(data)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(WeatherForecastPage);
