/**
 *
 * Asynchronously loads the component for FullDataForecast
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
