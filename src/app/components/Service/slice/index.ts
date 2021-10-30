import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { serviceSaga } from './saga';
import { ServiceState } from './types';

export const initialState: ServiceState = {
  menuId: 'recADThNkEbQaDQ59',
};

const slice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    // someAction(state, action: PayloadAction<any>) {},
    changeMenuId(state, action: PayloadAction<string>) {
      state.menuId = action.payload;
    },
  },
});

export const { actions: serviceActions } = slice;

export const useServiceSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: serviceSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useServiceSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
