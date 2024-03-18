'use client';
import Button from '@/components/common/Button';
import React, { useEffect, useState } from 'react';
import NavigationIcon from '@/public/static/svg/register/navigation.svg';
import Selector from '@/components/common/Selector';
import { countryList } from '@/lib/staticData';
import Input from '@/components/common/Input';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setCity,
  setCountry,
  setDetailAddress,
  setDistrict,
  setLatitude,
  setLongitude,
  setPostcode,
  setStreetAddress,
} from '@/store/features/room/registerRoomSlice';
import { getLocationInfoAPI, GeoLocationInfoAPIResponse } from '@/lib/api/map';
import RegisterRoomFooter from '@/components/register/RegisterRoomFooter';

const disabledCountryOptions = ['국가/지역 선택'];

const Location = () => {
  const [loading, setLoading] = useState(false);
  const country = useAppSelector((state) => state.registerRoom.country);
  const city = useAppSelector((state) => state.registerRoom.city);
  const district = useAppSelector((state) => state.registerRoom.district);
  const streetAddress = useAppSelector(
    (state) => state.registerRoom.streetAddress
  );
  const detailAddress = useAppSelector(
    (state) => state.registerRoom.detailAddress
  );
  const postcode = useAppSelector((state) => state.registerRoom.postcode);

  const dispatch = useAppDispatch();

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(
      !!country && !!city && !!district && !!streetAddress && !!postcode
    );
  }, [country, city, district, streetAddress, postcode]);

  //* 나라 변경
  const onChangeCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCountry(event.target.value));
  };
  //* 시/도 변경
  const onChangeCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCity(event.target.value));
  };
  //* 시/군/구 변경
  const onChangeDistrict = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDistrict(event.target.value));
  };
  //* 도로명주소 변경
  const onChangeStreetAddress = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setStreetAddress(event.target.value));
  };
  //* 동호수 변경
  const onChangeDetailAddress = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setDetailAddress(event.target.value));
  };
  //* 우편번호 변경
  const onChangePostcode = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPostcode(event.target.value));
  };

  //* 현재 위치 불러오기에 성공했을 때
  const onSuccessGetLocation = async ({ coords }: any) => {
    try {
      const currentLocation: GeoLocationInfoAPIResponse =
        await getLocationInfoAPI({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });

      const isEmpty = Object.keys(currentLocation).length === 0;

      if (!isEmpty) {
        dispatch(setCountry(currentLocation.country));
        dispatch(setCity(currentLocation.city));
        dispatch(setDistrict(currentLocation.district));
        dispatch(setStreetAddress(currentLocation.streetAddress));
        // dispatch(setPostcode(currentLocation.postCode));
        dispatch(setLatitude(currentLocation.latitude));
        dispatch(setLongitude(currentLocation.longitude));
      }
    } catch (e: any) {
      console.log(e);
      alert(e?.message);
    }
    setLoading(false);
  };

  //* 현재 위치 사용 클릭 시
  const onClickGetCurrentLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(onSuccessGetLocation, (e) => {
      console.log(e);
      alert(e?.message);
    });
  };

  return (
    <div className="pt-[62px] pb-[100px] px-[30px]">
      <h2 className="font-extrabold text-[19px] mb-[56px]">
        숙소의 위치를 알려주세요.
      </h2>
      <h3 className="font-bold text-gray_76 mb-[6px]">4단계</h3>
      <p className="text-sm max-w-[400px] mb-[24px]">
        정확한 숙소 주소는 게스트가 예약을 완료한 후에만 공개됩니다.
      </p>
      <div className="w-[176px] mb-[24px]">
        <Button
          color="dark_cyan"
          colorReverse
          icon={<NavigationIcon />}
          onClick={onClickGetCurrentLocation}
        >
          {loading ? '불러오는 중...' : '현재 위치 사용'}
        </Button>
      </div>
      <div className="w-[385px] mb-[24px]">
        <Selector
          type="register"
          options={countryList}
          value={country || undefined}
          defaultValue="국가/지역 선택"
          useValidation={false}
          disabledOptions={disabledCountryOptions}
          onChange={onChangeCountry}
        />
      </div>
      <div className="max-w-[386px] flex mb-[24px] gap-[24px] ">
        <Input label="시/도" value={city} onChange={onChangeCity} />
        <Input label="시/군/구" value={district} onChange={onChangeDistrict} />
      </div>
      <div className="max-w-[386px] mb-6">
        <Input
          label="도로명 주소"
          value={streetAddress}
          onChange={onChangeStreetAddress}
        />
      </div>
      <div className="max-w-[386px] mb-6">
        <Input
          label="동호수(선택 사항)"
          useValidation={false}
          value={detailAddress}
          onChange={onChangeDetailAddress}
        />
      </div>
      <div className="max-w-[386px]">
        <Input label="우편번호" value={postcode} onChange={onChangePostcode} />
      </div>
      <RegisterRoomFooter
        prevHref="/room/register/bathroom"
        nextHref="/room/register/geometry"
        isValid={!!isValid}
      />
    </div>
  );
};

export default Location;
