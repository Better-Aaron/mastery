'use client';
import React from 'react';
import RegisterRoomFooter from './RegisterRoomFooter';
import Input from '../common/Input';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { makeMoneyString } from '@/lib/utils';
import { setPrice } from '@/store/features/room/registerRoomSlice';

const RegisterRoomPrice: React.FC = () => {
  const dispatch = useAppDispatch();

  const price = useAppSelector((state) => state.registerRoom.price);

  //* 금액 변경
  const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const numberPrice = Number(input.replace(/,/g, ''));
    //? 인풋 값이 비워지면 price를 0으로 변경
    if (!numberPrice || numberPrice === 0) {
      dispatch(setPrice(0));
    }

    if (numberPrice !== 0) {
      dispatch(setPrice(numberPrice));
    }
  };

  return (
    <div className="pt-[62px] px-[30px] pb-[100px]">
      <h2 className="text-[19px] font-extrabold mb-[56px]">
        숙소 요금 설정하기
      </h2>
      <h3 className="font-bold text-gray_76 mb-[6px]">10단계</h3>
      <Input
        label="기본요금"
        value={makeMoneyString(String(price))}
        onChange={onChangePrice}
      />
      <RegisterRoomFooter
        prevHref="/room/register/title"
        nextHref="/room/register/date"
        isValid
      />
    </div>
  );
};

export default RegisterRoomPrice;
