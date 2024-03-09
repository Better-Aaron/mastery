import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/users/usersSlice';
import commonSlice from './features/common/commonSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
      common: commonSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
