'use client';
import React from 'react';
import Textarea from '../common/Textarea';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setDescription } from '@/store/features/room/registerRoomSlice';
import RegisterRoomFooter from './RegisterRoomFooter';

const RegisterRoomDescription = () => {
  const dispatch = useAppDispatch();
  const description = useAppSelector((state) => state.registerRoom.description);

  //* 숙소 설명 변경
  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch(setDescription(e.target.value));

  return (
    <div className="pt-[62px] px-[30px] pb-[100px]">
      <h2 className="text-[19px] font-extrabold mb-[56px]">
        게스트에게 숙소에 대해 설명해주세요.
      </h2>
      <h3 className="font-bold text-gray_76 mb-[6px]">8단계</h3>
      <p className="text-sm max-w-[400px] mb-[24px]">
        숙소의 장점, 틀별한 편의 시설(예: 빠른 와이파이 또는 주차 시설)과 주변
        지역의 매력을 소개해주세요.
      </p>
      <div className="">
        <Textarea value={description} onChange={onChangeDescription} />
      </div>
      <RegisterRoomFooter
        prevHref="/room/register/photo"
        nextHref="/room/register/title"
        isValid
      />
    </div>
  );
};

export default RegisterRoomDescription;
