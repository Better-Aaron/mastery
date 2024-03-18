'use client';
import React from 'react';
import RegisterRoomFooter from './RegisterRoomFooter';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setTitle } from '@/store/features/room/registerRoomSlice';
import Input from '../common/Input';
import { title } from 'process';

const RegisterRoomTitle: React.FC = () => {
  const title = useAppSelector((state) => state.registerRoom.title);

  const dispatch = useAppDispatch();

  //* 제목 변경 시
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(event.target.value));
  };

  return (
    <div className="pt-[62px] px-[30px] pb-[100px]">
      <h2 className="text-[19px] font-extrabold mb-[56px]">
        숙소의 제목을 만드세요.
      </h2>
      <h3 className="font-bold text-gray_76 mb-[6px]">9단계</h3>
      <div className="">
        <Input
          label="숙소의 특징과 장점을 강조하는 제목으로 게스트의 관심을 끌어보세요."
          value={title}
          onChange={onChangeTitle}
        />
      </div>

      <RegisterRoomFooter
        prevHref="/room/register/description"
        nextHref="/room/register/price"
        isValid
      />
    </div>
  );
};

export default RegisterRoomTitle;
