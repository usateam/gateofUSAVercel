import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.service || initialState;

export const selectService = createSelector(
  [selectSlice],
  state => state.menuId,
);
