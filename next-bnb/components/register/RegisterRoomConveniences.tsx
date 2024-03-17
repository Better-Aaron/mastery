'use client';
import { setConveniences } from '@/store/features/room/registerRoomSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import React from 'react';
import CheckboxGroup from '../common/CheckboxGroup';
import { convenienceList } from '@/lib/staticData';
import RegisterRoomFooter from './RegisterRoomFooter';

const RegisterRoomConveniences: React.FC = () => {
  const dispatch = useAppDispatch();

  const conveniences = useAppSelector(
    (state) => state.registerRoom.conveniences
  );
  const onChangeConveniences = (selected: string[]) => {
    dispatch(setConveniences(selected));
  };
  return (
    <div className="pt-[62px] px-[30px] pb-[100px]">
      <h2 className="text-[19px] font-extrabold mb-[56px]">
        게스트가 어떤 공간을 사용할 수 있나요?
      </h2>
      <h3 className="font-bold text-gray_76 mb-[6px]">6단계</h3>
      <p className="text-sm max-w-[400px] mb-[24px]">
        등록하고자 하는 수소에서 게스트가 이용 가능한 공용공간을 선택하세요.
      </p>
      <div className="">
        <CheckboxGroup
          value={conveniences}
          onChange={onChangeConveniences}
          options={convenienceList}
        />
      </div>
      <RegisterRoomFooter
        prevHref="/room/register/amentities"
        nextHref="/room/register/photo"
        isValid
      />
    </div>
  );
};

export default RegisterRoomConveniences;
