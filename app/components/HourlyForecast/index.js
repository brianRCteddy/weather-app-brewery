/**
 *
 * HourlyForecast
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function HourlyForecast() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

HourlyForecast.propTypes = {};

export default memo(HourlyForecast);
