/**
 *
 * HourlyForecastCard
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function HourlyForecastCard() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

HourlyForecastCard.propTypes = {};

export default memo(HourlyForecastCard);
