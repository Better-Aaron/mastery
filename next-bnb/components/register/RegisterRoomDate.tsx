'use client';
import React from 'react';
import RegisterRoomFooter from './RegisterRoomFooter';

import DatePicker from '../common/DatePicker';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setEndDate,
  setStartDate,
} from '@/store/features/room/registerRoomSlice';
import addHours from 'date-fns/addHours';

const RegisterRoomDate = () => {
  const startDate = useAppSelector((state) => state.registerRoom.startDate);
  const endDate = useAppSelector((state) => state.registerRoom.endDate);

  const dispatch = useAppDispatch();

  const dateStartDate = startDate ? new Date(startDate) : null;
  const dateEndDate = endDate ? new Date(endDate) : null;

  //* 예약 시작 날짜 변경
  const onChangeStartDate = (date: Date | null) => {
    dispatch(setStartDate(date ? date.toISOString() : null));
  };
  //* 예약 시작 날짜 변경
  const onChangeEndDate = (date: Date | null) => {
    dispatch(setEndDate(date ? date.toISOString() : null));
  };
  return (
    <div className="pt-[62px] px-[30px] pb-[100px]">
      <h2 className="text-[19px] font-extrabold mb-[56px]">
        예약 기능 여부 설정하기
      </h2>
      <h3 className="font-bold text-gray_76 mb-[6px]">11단계</h3>
      <div className="flex items-center">
        <div className="mr-5">
          <label>
            <span className="mb-2 block">예약 시작일</span>
            <DatePicker
              className="block relative w-full px-[11px] border border-gray_eb rounded outline-none placeholder::text-gray_76 focus:border-dark_cyan"
              selected={dateStartDate}
              onChange={onChangeStartDate}
              selectsStart
              monthsShown={2}
              startDate={dateStartDate}
              endDate={dateEndDate}
              minDate={new Date()}
            />
          </label>
        </div>

        <div className="">
          <label>
            <span className="mb-2 block">예약 마감일</span>
            <DatePicker
              className="block relative w-full px-[11px] border border-gray_eb rounded outline-none placeholder::text-gray_76 focus:border-dark_cyan"
              selected={dateEndDate}
              onChange={onChangeEndDate}
              monthsShown={2}
              selectsEnd
              startDate={dateStartDate}
              endDate={dateEndDate}
              minDate={dateStartDate || new Date()}
            />
          </label>
        </div>
      </div>

      <RegisterRoomFooter
        prevHref="/room/register/price"
        nextHref="/room/register/checklist"
      />
    </div>
  );
};

export default RegisterRoomDate;
