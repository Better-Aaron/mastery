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
  maximumGuestCount: number;
  //* 침실 개수
  bedroomCount: number;
  //*침대 개수
  bedCount: number;
  //*침대 유형
  bedList: { id: number; beds: { type: BedType; count: number }[] }[];
  //*공용공관 유형
  publicBedList: { type: BedType; count: number }[];
  //* 욕실 개수
  bathroomCount: number;
  //* 욕실 유형
  bathroomType: 'private' | 'public' | null;
  //* 국가/지역
  country: string;
  //* 시/도
  city: string;
  //* 시/군/구
  district: string;
  //* 도로명 주소
  streetAddress: string;
  //* 동호수
  detailAddress: string;
  //* 우편번호
  postcode: string;
  //* 위도
  latitude: number;
  //* 경도
  longitude: number;
  //* 편의 시설
  amentities: string[];
  //* 편의 공간
  conveniences: string[];
  //* 숙소 사진
  photos: string[];
  //* 숙소 설명
  description: string;
  //* 숙소 제목
  title: string;
  //* 숙소 요금
  price: number;
  //* 예약 시작 날짜
  startDate: string | null;
  //* 예약 종료 날짜
  endDate: string | null;
};

//* 초기상태
const initialState: RegisterRoomState = {
  largeBuildingType: null,
  buildingType: null,
  roomType: null,
  isSetUpForGuest: null,
  maximumGuestCount: 1,
  bedroomCount: 0,
  bedCount: 1,
  bedList: [],
  publicBedList: [],
  bathroomCount: 1,
  bathroomType: null,
  country: '',
  city: '',
  district: '',
  streetAddress: '',
  detailAddress: '',
  postcode: '',
  latitude: 0,
  longitude: 0,
  amentities: [],
  conveniences: [],
  photos: [
    'public/assets/upload/keyboard1__3c94770a-fb23-4957-806f-7b303a643f5a.avif',
    'public/assets/upload/keyboard1__07f2a4c8-4b8e-431b-99cf-bb6e0023b1e1.avif',
    'public/assets/upload/keyboard1__327abc5a-1599-431f-aa74-8c33e25b0024.avif',
  ],
  description: '',
  title: '',
  price: 0,
  startDate: null,
  endDate: null,
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
      state.maximumGuestCount = action.payload;
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
    //* 욕실 개수 변경
    setBathroomCount(state, action: PayloadAction<number>) {
      state.bathroomCount = action.payload;
    },
    //* 욕실 유형 변경
    setBathroomType(state, action: PayloadAction<'public' | 'private'>) {
      state.bathroomType = action.payload;
    },
    //* 국가 변경
    setCountry(state, action: PayloadAction<string>) {
      state.country = action.payload;
    },
    //* 시/도 변경
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    //* 시/군/구 변경
    setDistrict(state, action: PayloadAction<string>) {
      state.district = action.payload;
    },
    //* 도로명주소 변경
    setStreetAddress(state, action: PayloadAction<string>) {
      state.streetAddress = action.payload;
    },
    //* 동호수 변경
    setDetailAddress(state, action: PayloadAction<string>) {
      state.detailAddress = action.payload;
    },
    //* 우편번호 변경
    setPostcode(state, action: PayloadAction<string>) {
      state.postcode = action.payload;
    },
    //* 위도 변경
    setLatitude(state, action: PayloadAction<number>) {
      state.latitude = action.payload;
    },
    //* 경도 변경
    setLongitude(state, action: PayloadAction<number>) {
      state.longitude = action.payload;
    },
    //* 편의 시설 설정
    setAmentities(state, action: PayloadAction<string[]>) {
      state.amentities = action.payload;
    },
    //* 편의 공간 설정
    setConveniences(state, action: PayloadAction<string[]>) {
      state.conveniences = action.payload;
    },
    //* 숙소 사진 변경하기
    setPhotos(state, action: PayloadAction<string[]>) {
      state.photos = action.payload;
    },
    //* 숙소 설명 변경하기
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    //* 숙소 제목 변경하기
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    //* 숙소 요금 변경하기
    setPrice(state, action: PayloadAction<number>) {
      state.price = action.payload;
    },
    //* 예약 시작 날짜 변경하기
    setStartDate(state, action: PayloadAction<string | null>) {
      state.startDate = action.payload;
    },
    //* 예약 마감 날짜 변경하기
    setEndDate(state, action: PayloadAction<string | null>) {
      state.endDate = action.payload;
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
  setBathroomCount,
  setBathroomType,
  setCountry,
  setCity,
  setDistrict,
  setStreetAddress,
  setDetailAddress,
  setPostcode,
  setLatitude,
  setLongitude,
  setAmentities,
  setConveniences,
  setPhotos,
  setDescription,
  setTitle,
  setPrice,
  setStartDate,
  setEndDate,
} = registerRoomSlice.actions;
export default registerRoomSlice.reducer;
