'use client';
import React, { useMemo } from 'react';
import Selector from '../common/Selector';
import {
  apartmentBuildingTypeList,
  largeBuildingTypeList,
} from '@/lib/staticData';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setBuildingType,
  setLargeBuildingType,
} from '@/store/features/room/registerRoomSlice';

const disabledLargeBuildingTypeOptions = ['하나를 선택해주세요.'];

const RegisterRoomBuilding = () => {
  const largeBuildingType = useAppSelector(
    (state) => state.registerRoom.largeBuildingType
  );

  const dispatch = useAppDispatch();
  const onChangeLargeBuildingType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setLargeBuildingType(event.target.value));
  };

  const detailBuildingOptions = useMemo(() => {
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
        const { uniqueSpaceBuildingTypeList } = require('../../lib/staticData');
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
        return [];
    }
  }, [largeBuildingType, dispatch]);

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
          value={undefined}
          disabled={!largeBuildingType}
          label="건물 유형을 선택하세요."
          options={detailBuildingOptions}
        />
      </div>
    </div>
  );
};

export default RegisterRoomBuilding;
