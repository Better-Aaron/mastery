import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/users/usersSlice';
import commonSlice from './features/common/commonSlice';
import authSlide from './features/auth/authSlice';
import registerRoomSlice from './features/room/registerRoomSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
      common: commonSlice,
      auth: authSlide,
      registerRoom: registerRoomSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
