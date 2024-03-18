import Link from 'next/link';
import React from 'react';
import BackArrowIcon from '@/public/static/svg/register/register_room_footer_back_arrow.svg';
import Button from '../common/Button';
import { useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/router';

const RegisterRoomSubmitFooter = () => {
  const userId = useAppSelector((state) => state.user.id);
  const registerRoom = useAppSelector((state) => state.registerRoom);

  const router = useRouter();

  //* 등록하기
  const onClickRegisterRoom = async () => {
    const registerRoomBody = {
      ...registerRoom,
      hostId: userId,
    };
    try {
      await registerRoomAPI(registerRoomBody);

      router.push('/');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <footer className="fixed bottom-0 flex justify-between w-[548px] h-[82px] bg-white z-10 border-t border-t-gray_dd items-center pt-[14px] px-[30px] pb-[20px]">
      <Link href="/room/register/date">
        <div className="flex items-center text-dark_cyan cursor-pointer">
          <BackArrowIcon className="mr-2" />
          뒤로
        </div>
      </Link>
      <Button onClick={onClickRegisterRoom} color="bittersweet" width="102px">
        등록하기
      </Button>
    </footer>
  );
};

export default RegisterRoomSubmitFooter;
