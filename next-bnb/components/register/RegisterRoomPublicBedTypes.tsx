import { bedTypes } from '@/lib/staticData';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { BedType } from '@/types/room';
import React, { useMemo, useState } from 'react';
import Button from '../common/Button';
import Counter from '../common/Counter';
import Selector from '../common/Selector';
import { setPublicBedTypeCount } from '@/store/features/room/registerRoomSlice';

const RegisterRoomPublicBedTypes: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const publicBedList = useAppSelector(
    (state) => state.registerRoom.publicBedList
  );

  const dispatch = useAppDispatch();

  const totalBedsCount = useMemo(() => {
    let total = 0;
    publicBedList.forEach((bed) => {
      total += bed.count;
    });
    return total;
  }, [publicBedList]);

  const bedsText = useMemo(() => {
    const texts = publicBedList.map((bed) => `${bed.type} ${bed.count}개`);
    return texts.join(',');
  }, [publicBedList]);

  const initialBedOptions = () => publicBedList.map((bed) => bed.type);
  //* 선택 된 침대 옵션
  const [activedBedOptions, setActivedBedOptions] =
    useState<BedType[]>(initialBedOptions);

  //* 남은 침대 옵션
  const lastBedOptions = useMemo(() => {
    return bedTypes.filter((bedType) => !activedBedOptions.includes(bedType));
  }, [activedBedOptions]);

  return (
    <li className="w-full py-[28px] border-t border-gray_dd last:border-b last:border-gray_dd">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[19px] text-gray_48">공용공관</p>
          <p>
            침대 {totalBedsCount}개<br />
            {bedsText}
          </p>
        </div>
        <Button
          onClick={() => setOpened(!opened)}
          styleType="register"
          color="white"
        >
          {opened && '완료'}
          {!opened &&
            (totalBedsCount === 0 ? '침대 추가하기' : '침대 수정하기')}
        </Button>
      </div>
      {opened && (
        <div className="w-[320px] mt-[28px]">
          {activedBedOptions.map((type) => (
            <div className="w-[290px] mb-[18px]" key={type}>
              <Counter
                label={type}
                value={
                  publicBedList.find((bed) => bed.type === type)?.count || 0
                }
                key={type}
                onChange={(value) =>
                  dispatch(
                    setPublicBedTypeCount({
                      type,
                      count: value,
                    })
                  )
                }
              />
            </div>
          ))}
          <Selector
            type="register"
            options={lastBedOptions}
            disabledOptions={['다른 침대 추가']}
            value="다른 침대 추가"
            useValidation={false}
            onChange={(e) =>
              setActivedBedOptions([
                ...activedBedOptions,
                e.target.value as BedType,
              ])
            }
          />
        </div>
      )}
    </li>
  );
};

export default RegisterRoomPublicBedTypes;
