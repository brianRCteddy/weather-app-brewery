/**
 *
 * WeatherForecastPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectWeatherForecastPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { filterDaily } from './actions';

export function WeatherForecastPage(props) {
  useInjectReducer({ key: 'weatherForecastPage', reducer });
  useInjectSaga({ key: 'weatherForecastPage', saga });
  useEffect(() => {
    filterDaily();
  }, []);

  return (
    <div>
      <Helmet>
        <title>WeatherForecastPage</title>
        <meta name="description" content="Description of WeatherForecastPage" />
      </Helmet>
      {console.log(props)}
      <FormattedMessage {...messages.header} />
    </div>
  );
}

WeatherForecastPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  weatherForecastPage: makeSelectWeatherForecastPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    filterDaily: () => dispatch(filterDaily()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(WeatherForecastPage);