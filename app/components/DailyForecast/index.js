/**
 *
 * DailyForecast
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage, FormattedDate } from 'react-intl';
import messages from './messages';
import { Link } from 'react-router-dom';

function DailyForecast({ data }) {
  const newDate = new Date(data.dt_txt);
  const getDayName = newDate.toString().split(' ');
  const linkUrl = getDayName[0];
  return (
    <div>
      <Link
        to={`/${linkUrl}`}
        style={{ textDecoration: 'underline', color: 'black' }}
      >
        <FormattedDate value={new Date(data.dt * 1000)} />
        <br />
      </Link>
    </div>
  );
}

DailyForecast.propTypes = {
  data: PropTypes.object.isRequired,
};

export default memo(DailyForecast);
