/**
 *
 * FullDataForecast
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { filterHourly } from '../../containers/WeatherForecastPage/actions';

function FullDataForecast(props) {
  return (
    <div>
      <h1 />
      <FormattedMessage {...messages.header} />
    </div>
  );
}

FullDataForecast.propTypes = {};

const mapDispatchToProps = dispatch => ({
  filterHourly: (index, list) => dispatch(filterHourly(index, list)),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FullDataForecast);
