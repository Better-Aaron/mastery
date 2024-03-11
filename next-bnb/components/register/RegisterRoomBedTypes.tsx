import { bedTypes } from '@/lib/staticData';
import { setBedTypeCount } from '@/store/features/room/registerRoomSlice';
import { useAppDispatch } from '@/store/hooks';
import { BedType } from '@/types/room';
import React, { useMemo, useState } from 'react';
import Button from '../common/Button';
import Counter from '../common/Counter';
import Selector from '../common/Selector';

interface IProps {
  bedroom: { id: number; beds: { type: BedType; count: number }[] };
}

const RegisterRoomBedTypes: React.FC<IProps> = ({ bedroom }) => {
  const dispatch = useAppDispatch();
  const [opened, setOpened] = useState(false);

  const initialBedOptions = bedroom.beds.map((bed) => bed.type);

  //* 선택된 침대 옵션들
  const [activedBedOptions, setActivedBedOptions] =
    useState<BedType[]>(initialBedOptions);

  //* 남은 침대 옵션들
  const lastBedOptions = useMemo(() => {
    return bedTypes.filter((bedType) => !activedBedOptions.includes(bedType));
  }, [activedBedOptions]);

  //* 침대 개수 총합
  const totlaBedsCount = useMemo(() => {
    let total = 0;
    bedroom.beds.forEach((bed) => {
      total += bed.count;
    });
    return total;
  }, [bedroom]);

  //* 침실 침대 개수 변경
  const onChangeBedTypeCount = (value: number, type: BedType) => {
    dispatch(
      setBedTypeCount({
        bedroomId: bedroom.id,
        type,
        count: value,
      })
    );
  };

  //* 침대 종류 텍스트
  const bedsText = useMemo(() => {
    const texts = bedroom.beds.map((bed) => `${bed.type} ${bed.count}개`);
    return texts.join(',');
  }, [bedroom]);

  //* 침실 유형 열고 닫기
  const toggleOpened = () => setOpened(!opened);

  return (
    <li className="w-full py-[28px] border-t border-gray_dd last:border-b last:border-gray_dd">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[19px] text-gray_48">{bedroom.id}번 침실</p>
          <p>
            침대 {totlaBedsCount} 개<br />
            {bedsText}
          </p>
        </div>
        <Button onClick={toggleOpened} styleType="register" color="white">
          {opened && '완료'}
          {!opened &&
            (totlaBedsCount === 0 ? '침대 추가하기' : '침대 수정하기')}
        </Button>
      </div>
      {opened && (
        <div className="w-[320px] mt-[28px]">
          {activedBedOptions.map((type) => (
            <div className="w-[290px] mb-[18px]" key={type}>
              <Counter
                label={type}
                value={
                  bedroom.beds.find((bed) => bed.type === type)?.count || 0
                }
                key={type}
                onChange={(value) => onChangeBedTypeCount(value, type)}
              />
            </div>
          ))}
          <Selector
            type="register"
            options={lastBedOptions}
            defaultValue="다른 침대 추가"
            value="다른 침대 추가"
            disabledOptions={['다른 침대 추가']}
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

export default RegisterRoomBedTypes;
