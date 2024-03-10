import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { authMode: 'signup' | 'login' } = {
  authMode: 'signup',
};

const authSlide = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //* 인증 팝업 변경하기
    setAuthMode(state, action: PayloadAction<'signup' | 'login'>) {
      state.authMode = action.payload;
    },
  },
});

export const { setAuthMode } = authSlide.actions;

export default authSlide.reducer;
