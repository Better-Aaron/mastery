'use client';
import { setAmentities } from '@/store/features/room/registerRoomSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import React from 'react';
import RegisterRoomFooter from './RegisterRoomFooter';
import CheckboxGroup from '../common/CheckboxGroup';
import { amentityList } from '@/lib/staticData';

const RegisterRoomAmentities = () => {
  const dispatch = useAppDispatch();

  const amentities = useAppSelector((state) => state.registerRoom.amentities);

  const onChangeAmentities = (selected: string[]) => {
    dispatch(setAmentities(selected));
  };

  return (
    <div className="pt-[62px] px-[30px] pb-[100px]">
      <h2 className="text-[19px] font-extrabold mb-[56px]">
        어떤 편의 시설을 제공하시나요?
      </h2>
      <h3 className="font-bold text-gray_76 mb-[6px]">5단계</h3>
      <p className="text-sm max-w-[400px] mb-[24px]">
        일반적으로 게스트가 기대하는 편의 시설 목록입니다. 숙소를 등록한 후
        언제든 편의 시설을 추가할 수 있어요.
      </p>
      <div className="">
        <CheckboxGroup
          value={amentities}
          onChange={onChangeAmentities}
          options={amentityList}
        />
      </div>
      <RegisterRoomFooter
        prevHref="/room/register/location"
        nextHref="/room/register/conveniences"
        isValid={amentities.length > 0}
      />
    </div>
  );
};

export default RegisterRoomAmentities;
