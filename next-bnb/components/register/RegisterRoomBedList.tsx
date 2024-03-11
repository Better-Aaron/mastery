import { useAppSelector } from '@/store/hooks';
import React from 'react';
import RegisterRoomBedTypes from './RegisterRoomBedTypes';
import RegisterRoomPublicBedTypes from './RegisterRoomPublicBedTypes';

const RegisterRoomBedList: React.FC = () => {
  const bedList = useAppSelector((state) => state.registerRoom.bedList);

  return (
    <ul className="w-[548px]">
      {bedList.map((bedroom) => (
        <RegisterRoomBedTypes key={bedroom.id} bedroom={bedroom} />
      ))}
      <RegisterRoomPublicBedTypes />
    </ul>
  );
};

export default RegisterRoomBedList;
