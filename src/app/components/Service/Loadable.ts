/**
 *
 * Asynchronously loads the component for Service
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Service = lazyLoad(
  () => import('./index'),
  module => module.Service,
);
