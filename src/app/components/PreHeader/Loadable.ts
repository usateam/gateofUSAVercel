/**
 *
 * Asynchronously loads the component for PreHeader
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PreHeader = lazyLoad(
  () => import('./index'),
  module => module.PreHeader,
);
