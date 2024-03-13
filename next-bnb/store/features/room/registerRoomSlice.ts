import { BedType } from '@/types/room';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type RegisterRoomState = {
  //* 건물 유형 큰 범부
  largeBuildingType: string | null;
  //* 건물 유형
  buildingType: string | null;
  //* 숙소 유형
  roomType: string | null;
  //* 게스트만을 위해 만들어진 숙소?
  isSetUpForGuest: boolean | null;
  //* 최대 숙박인원
  maxsimumGuestCount: number;
  //* 침실 개수
  bedroomCount: number;
  //*침대 개수
  bedCount: number;
  //*침대 유형
  bedList: { id: number; beds: { type: BedType; count: number }[] }[];
  //*공용공관 유형
  publicBedList: { type: BedType; count: number }[];
};

//* 초기상태
const initialState: RegisterRoomState = {
  largeBuildingType: null,
  buildingType: null,
  roomType: null,
  isSetUpForGuest: null,
  maxsimumGuestCount: 1,
  bedroomCount: 0,
  bedCount: 1,
  bedList: [],
  publicBedList: [],
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
    setRoomType(state, action: PayloadAction<'entire' | 'private' | 'public'>) {
      state.roomType = action.payload;
      return state;
    },
    setIsSetUpForGuest(state, action: PayloadAction<boolean>) {
      state.isSetUpForGuest = action.payload;
      return state;
    },
    setMaximumGuestCount(state, action: PayloadAction<number>) {
      state.maxsimumGuestCount = action.payload;
      return state;
    },
    //* 침실 개수 변경
    setBedroomCount(state, action: PayloadAction<number>) {
      const bedroomCount = action.payload;
      let { bedList } = state;

      state.bedroomCount = bedroomCount;
      if (bedroomCount < bedList.length) {
        //* 기존 침대 개수가 더 많으면 초과 부분 잘라내기
        bedList = state.bedList.slice(0, bedroomCount);
      } else {
        //* 변경될 챔대 개수가 더 많으면 나머지 침실 채우기
        for (let i = bedList.length + 1; i < bedroomCount + 1; i += 1) {
          bedList.push({ id: i, beds: [] });
        }
      }

      state.bedList = bedList;

      return state;
    },
    setBedCount(state, action: PayloadAction<number>) {
      state.bedCount = action.payload;
      return state;
    },
    //* 침대 최대 갯수 변경하기
    setBedTypeCount(
      state,
      action: PayloadAction<{
        bedroomId: number;
        type: BedType;
        count: number;
      }>
    ) {
      const { bedroomId, type, count } = action.payload;
      const bedroom = state.bedList[bedroomId - 1];
      const prevBeds = bedroom.beds;
      const index = prevBeds.findIndex((bed) => bed.type === type);
      if (index === -1) {
        //* 타입이 없다면
        state.bedList[bedroomId - 1].beds = [...prevBeds, { type, count }];
        return state;
      }
      //* 타입이 존재 한다면
      if (count === 0) {
        state.bedList[bedroomId - 1].beds.splice(index, 1);
      } else {
        state.bedList[bedroomId - 1].beds[index].count = count;
      }
      return state;
    },
    //* 공용공간 침대 유형 개수 변경하기
    setPublicBedTypeCount(
      state,
      action: PayloadAction<{
        type: BedType;
        count: number;
      }>
    ) {
      const { type, count } = action.payload;

      const index = state.publicBedList.findIndex((bed) => bed.type === type);
      if (index === -1) {
        state.publicBedList = [...state.publicBedList, { type, count }];
        return state;
      }
      if (count === 0) {
        state.publicBedList.slice(index, 1);
      } else {
        state.publicBedList[index].count = count;
      }
      return state;
    },
  },
});

export const {
  setLargeBuildingType,
  setBuildingType,
  setRoomType,
  setIsSetUpForGuest,
  setMaximumGuestCount,
  setBedroomCount,
  setBedCount,
  setBedTypeCount,
  setPublicBedTypeCount,
} = registerRoomSlice.actions;
export default registerRoomSlice.reducer;
