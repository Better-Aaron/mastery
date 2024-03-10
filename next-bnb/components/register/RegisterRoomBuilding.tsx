'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Selector from '../common/Selector';
import {
  apartmentBuildingTypeList,
  largeBuildingTypeList,
} from '@/lib/staticData';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setBuildingType,
  setIsSetUpForGuest,
  setLargeBuildingType,
  setRoomType,
} from '@/store/features/room/registerRoomSlice';
import RadioGroup from '../common/RadioGroup';

const disabledLargeBuildingTypeOptions = ['하나를 선택해주세요.'];

//* 숙소 유형 radio options
const roomTypeRadioOptions = [
  {
    label: '집 전체',
    value: 'entire',
    description:
      '게스트가 숙소 전체를 다른 사람과 공유하지 않고 단독으로 이용합니다. 일반적으로 침실, 욕실, 부엌이 포함됩니다.',
  },
  {
    label: '개인실',
    value: 'private',
    description:
      '게스트에게 개인 침실이 제공됩니다. 침실 이외의 공간은 공용일 수 있습니다.',
  },
  {
    label: '다인실',
    value: 'public',
    description:
      '게스트는 개인 공간 없이, 다른 사람과 함께 쓰는 침실이나 공용 공간에서 숙박합니다.',
  },
];

//* 게스트만 사용하도록 만들어진 숙소인지 라디오 options
const isSetUpForGuestOptions = [
  {
    label: '예. 게스트용으로 따로 마련된 숙소입니다.',
    value: true,
  },
  {
    label: '아니요. 제 개인 물건이 숙소에 있습니다.',
    value: false,
  },
];

const RegisterRoomBuilding = () => {
  const [detailBuildingOptions, setDetailBuildingOptions] = useState([
    '아파트',
  ]);

  const dispatch = useAppDispatch();
  const largeBuildingType = useAppSelector(
    (state) => state.registerRoom.largeBuildingType
  );

  const buildingType = useAppSelector(
    (state) => state.registerRoom.buildingType
  );

  const roomType = useAppSelector((state) => state.registerRoom.roomType);

  const isSetUpForGuest = useAppSelector(
    (state) => state.registerRoom.isSetUpForGuest
  );
  //* 큰 범위 건물유형 변경
  const onChangeLargeBuildingType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setLargeBuildingType(event.target.value));
  };

  useEffect(() => {
    const getDetailBuildingOptions = () => {
      switch (largeBuildingType) {
        case '아파트':
          {
            const { aptmentBuildingTypeList } = require('../../lib/staticData');
          }
          dispatch(setBuildingType(apartmentBuildingTypeList[0]));
          return apartmentBuildingTypeList;
        case '주택': {
          const { houstBuildingTypeList } = require('../../lib/staticData');
          dispatch(setBuildingType(houstBuildingTypeList[0]));
          return houstBuildingTypeList;
        }
        case '별채': {
          const {
            secondaryUnitBuildingTypeList,
          } = require('../../lib/staticData');
          dispatch(setBuildingType(secondaryUnitBuildingTypeList[0]));
          return secondaryUnitBuildingTypeList;
        }
        case '독특한 숙소': {
          const {
            uniqueSpaceBuildingTypeList,
          } = require('../../lib/staticData');
          dispatch(setBuildingType(uniqueSpaceBuildingTypeList[0]));
          return uniqueSpaceBuildingTypeList;
        }
        case 'B&B': {
          const { bnbBuildingTypeList } = require('../../lib/staticData');
          dispatch(setBuildingType(bnbBuildingTypeList[0]));
          return bnbBuildingTypeList;
        }
        case '부티크호텔': {
          const {
            boutiquesHotelBuildingTypeList,
          } = require('../../lib/staticData');
          dispatch(setBuildingType(boutiquesHotelBuildingTypeList[0]));
          return boutiquesHotelBuildingTypeList;
        }
        default:
          return ['아파트'];
      }
    };

    setDetailBuildingOptions(getDetailBuildingOptions());
  }, [largeBuildingType, dispatch]);

  //* 상세 건물유형 변경
  const onChangeBuildingType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setBuildingType(event.target.value));
  };

  //* 숙소 유형 변경
  const onChangeRoomType = (value: string) => {
    dispatch(setRoomType(value as 'entire' | 'private' | 'public'));
  };

  //* 게스트용 숙소인지 변경
  const onChangeIsSetUpForGuest = (value: boolean) => {
    console.log(value);
    dispatch(setIsSetUpForGuest(value));
  };

  return (
    <div className="pt-[62px] px-[30px] pb-[100px]">
      <h2 className="text-[19px] font-extrabold mb-16">
        등록할 숙소 종류는 무엇인가요?
      </h2>
      <h3 className="font-bold text-gray_76 mb-1.5">1단계</h3>
      <div className="w-[320px] mb-8">
        <Selector
          type="register"
          value={largeBuildingType || undefined}
          defaultValue="하나를 선택해주세요."
          disabledOptions={disabledLargeBuildingTypeOptions}
          label="우선 범위를 좁혀볼까요?"
          options={largeBuildingTypeList}
          onChange={onChangeLargeBuildingType}
        ></Selector>
      </div>
      <div className="w-[320px] mb-8">
        <Selector
          type="register"
          value={buildingType || undefined}
          disabled={!largeBuildingType}
          label="건물 유형을 선택하세요."
          options={detailBuildingOptions}
          onChange={onChangeBuildingType}
        />
      </div>
      {buildingType && (
        <>
          <div className="max-w-[485px] mb-[50px]">
            <RadioGroup
              label="게스트가 묵게 될 숙소 유형을 골라주세요."
              value={roomType || undefined}
              options={roomTypeRadioOptions}
              onChange={onChangeRoomType}
            />
          </div>
          <div className="mb-[50px]">
            <RadioGroup
              label="게스트만 사용하도록 만들어진 숙소인가요?"
              value={isSetUpForGuest}
              onChange={onChangeIsSetUpForGuest}
              options={isSetUpForGuestOptions}
              isValid={isSetUpForGuest !== null}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default RegisterRoomBuilding;
