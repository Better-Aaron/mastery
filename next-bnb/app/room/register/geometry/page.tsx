import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const RegisterRoomGeometry = dynamic(
  () => import('../../../../components/register/RegisterRoomGeometry'),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const geomery: NextPage = () => {
  return (
    <>
      <RegisterRoomGeometry />
    </>
  );
};

export default geomery;
