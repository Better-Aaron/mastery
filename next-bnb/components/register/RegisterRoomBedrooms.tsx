'use client';
import React from 'react';
import Counter from '../common/Counter';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setBedCount,
  setBedroomCount,
  setMaximumGuestCount,
} from '@/store/features/room/registerRoomSlice';
import { getNumber } from '@/lib/utils';
import Selector from '../common/Selector';
import { bedroomCountList } from '@/lib/staticData';
import Button from '../common/Button';
import RegisterRoomBedTypes from './RegisterRoomBedTypes';
import RegisterRoomBedList from './RegisterRoomBedList';
import RegisterRoomFooter from './RegisterRoomFooter';

const RegisterRopomBedrooms = () => {
  const dispatch = useAppDispatch();

  const maximumGeustCount = useAppSelector(
    (state) => state.registerRoom.maxsimumGuestCount
  );

  const bedroomCount = useAppSelector(
    (state) => state.registerRoom.bedroomCount
  );

  const bedCount = useAppSelector((state) => state.registerRoom.bedCount);

  const bedList = useAppSelector((state) => state.registerRoom.bedList);
  //* 최대 숙박 인원 변경
  const onChangeMaximumGuestCount = (value: number) => {
    dispatch(setMaximumGuestCount(value));
  };

  //* 침실 개수 변경
  const onChangeBedroomCount = (event: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(setBedroomCount(getNumber(event.target.value) || 0));

  //* 침대 개수 변경
  const onChangeBedCount = (value: number) => {
    dispatch(setBedCount(value));
  };
  return (
    <div className="pt-[62px] px-[30px] pb-[100px]">
      <h2 className="text-[19px] font-black mb-14">
        숙소에 얼마나 많은 인원이 숙박할 수 있나요?
      </h2>
      <h3 className="font-bold text-gray_76 mb-1.5">2단계</h3>
      <p className="text-sm max-w-[400px] mb-6 break-keep">
        모든 게스트가 편안하게 숙박할 수 있도록 침대가 충분히 구비되어 있는지
        확인하세요.
      </p>
      <div className="w-[320px] mt-[24px] mb-[32px]">
        <Counter
          label="최대 숙박 인원"
          value={maximumGeustCount}
          onChange={onChangeMaximumGuestCount}
        />
      </div>
      <div className="w-[320px] mt-[24px] mb-[32px]">
        <Selector
          type="register"
          value={`침실 ${bedroomCount}개`}
          onChange={onChangeBedroomCount}
          label="게스트가 사용할 수 있는 침실은 몇 개인가요?"
          options={bedroomCountList}
        />
      </div>
      <div className="w-[320px] mt-[24px] mb-[32px]">
        <Counter label="침대" value={bedCount} onChange={onChangeBedCount} />
      </div>
      <h4 className="text-[24px] mb-1.5">침대 유형</h4>
      <p className="mt-1.5 mb-5 max-w-[400px] break-keep">
        각 침실에 놓인 침대 유형을 명시하면 숙소에 침대가 어떻게 구비되어 있는지
        게스트가 잘 팔악할 수 있습니다.
      </p>
      <RegisterRoomBedList />
      <RegisterRoomFooter
        prevHref="/room/register/building"
        nextHref="/room/register/bathroom"
        isValid={!!bedroomCount}
      />
    </div>
  );
};
export default RegisterRopomBedrooms;
