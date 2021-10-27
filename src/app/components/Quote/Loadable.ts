/**
 *
 * Asynchronously loads the component for Quote
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Quote = lazyLoad(
  () => import('./index'),
  module => module.Quote,
);
