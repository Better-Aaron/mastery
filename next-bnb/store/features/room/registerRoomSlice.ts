import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type RegisterRoomState = {
  largeBuildingType: string | null; //* 건물 유형 큰 범부
  buildingType: string | null; //* 건물 유형
  roomType: string | null; //* 숙소 유형
  isSetUpForGuest: boolean | null; //* 게스트만을 위해 만들어진 숙소?
};

//* 초기상태
const initialState: RegisterRoomState = {
  largeBuildingType: null,
  buildingType: null,
  roomType: null,
  isSetUpForGuest: null,
};

const registerRoomSlice = createSlice({
  name: 'registerRoom',
  initialState,
  reducers: {
    //* 큰 건물 유형 변경
    setLargeBuildingType(state, action: PayloadAction<string>) {
      if (action.payload === '') {
        state.largeBuildingType = null;
      }
      state.largeBuildingType = action.payload;
      return state;
    },
    setBuildingType(state, action: PayloadAction<string>) {
      if (action.payload === '') {
        state.buildingType = null;
      }
      state.buildingType = action.payload;
      return state;
    },
  },
});

export const { setLargeBuildingType, setBuildingType } =
  registerRoomSlice.actions;
export default registerRoomSlice.reducer;
