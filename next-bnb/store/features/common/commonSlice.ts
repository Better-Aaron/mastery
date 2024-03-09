import { CommonState } from '@/types/reduxState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CommonState = {
  validateMode: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    //* validateMode 설정하기
    setValidateMode(state, action: PayloadAction<boolean>) {
      state.validateMode = action.payload;
    },
  },
});

export const { setValidateMode } = commonSlice.actions;

export default commonSlice.reducer;
