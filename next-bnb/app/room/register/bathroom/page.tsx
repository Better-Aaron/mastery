'use client';
import Counter from '@/components/common/Counter';
import RadioGroup from '@/components/common/RadioGroup';
import RegisterRoomFooter from '@/components/register/RegisterRoomFooter';
import {
  setBathroomCount,
  setBathroomType,
} from '@/store/features/room/registerRoomSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import React from 'react';

const Bathroom: React.FC = () => {
  const bathroomCount = useAppSelector(
    (state) => state.registerRoom.bathroomCount
  );
  const bathroomType = useAppSelector(
    (state) => state.registerRoom.bathroomType
  );

  const dispatch = useAppDispatch();

  return (
    <div className="pt-[62px] px-[30px] pb-[100px]">
      <h2 className="text-[19px] font-extrabold mb-[56px]">욕실 수</h2>
      <h3 className="font-bold text-gray_76 mb-[6px]">3단계</h3>
      <p className="text-sm max-w-[400px] mb-[24px]">
        샤워실 또는 욕조가 없는 경우 0.5개로 간주합니다.
      </p>
      <div className="w-[290px] mb-[32px]">
        <Counter
          label="욕실"
          increseNum={0.5}
          value={bathroomCount}
          onChange={(value) => dispatch(setBathroomCount(value))}
        />
      </div>
      <RadioGroup
        label="게스트가 단독으로 사용하는 욕실인가요?"
        value={bathroomType}
        isValid={!!bathroomType}
        onChange={(value) => dispatch(setBathroomType(value))}
        options={[
          { value: 'private', label: '예' },
          { value: 'public', label: '아니오, 공용입니다.' },
        ]}
      />
      <RegisterRoomFooter
        prevHref="/room/register/bedrooms"
        nextHref="/room/register/location"
        isValid={bathroomCount > 0 && !!bathroomType}
      />
    </div>
  );
};

export default Bathroom;
