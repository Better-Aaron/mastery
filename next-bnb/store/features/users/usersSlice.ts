import { UserState } from '@/types/reduxState';
import { UserType } from '@/types/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: UserState = {
  id: 0,
  email: '',
  lastname: '',
  firstname: '',
  birthday: '',
  isLogged: false,
  profileImage: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //* 로그인한 유저 변경하기
    setLoggedUser(state, action: PayloadAction<UserType>) {
      state = { ...action.payload, isLogged: true };
      return state;
    },
    //* 유저 초기화 하기
    initUser(state) {
      state = initialState;
      return state;
    },
  },
});

export const { setLoggedUser, initUser } = userSlice.actions;

export default userSlice.reducer;
