/**
 *
 * Asynchronously loads the component for HourlyForecastCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
