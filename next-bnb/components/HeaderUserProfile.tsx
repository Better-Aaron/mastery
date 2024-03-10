import { logoutAPI } from '@/lib/api/auth';
import { initUser } from '@/store/features/users/usersSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import HamburgerIcon from '@/public/static/svg/header/hamburger.svg';
import Image from 'next/image';
import Link from 'next/link';

const HeaderUserProfile: React.FC = () => {
  //* 유저 메뉴 열고, 단힘 여부
  const [isUserMenuOpened, setIsUserMenuOpened] = useState(false);
  const profileImage = useAppSelector((state) => state.user.profileImage);
  const dispatch = useAppDispatch();

  //* 로그아웃 하기.
  const logout = async () => {
    try {
      await logoutAPI();
      dispatch(initUser());
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        if (isUserMenuOpened) {
          setIsUserMenuOpened(false);
        }
      }}
    >
      <button
        type="button"
        className="flex items-center h-11 pr-1.5 pl-4 border-none shadow-sm rounded-[21px] bg-white cursor-pointer outline-none hover:shadow-md"
        onClick={() => setIsUserMenuOpened(!isUserMenuOpened)}
      >
        <HamburgerIcon />
        <Image
          className="ml-2 rounded-full"
          src={profileImage}
          width={30}
          height={30}
          alt=""
        />
      </button>
      {isUserMenuOpened && (
        <ul className="absolute right-0 top-14 w-[240px] py-2 shadow rounded-lg bg-white">
          <li className="flex items-center w-full h-10 px-4 cursor-pointer hover:bg-gray_f7">
            숙소관리
          </li>
          <Link href="/room/register/building">
            <button
              role="presentation"
              onClick={() => setIsUserMenuOpened(false)}
            >
              <li className=" flex items-center w-full h-10 px-4 cursor-pointer hover:bg-gray_f7">
                숙소 등록하기
              </li>
            </button>
          </Link>
          <div className="w-full h-[1px] my-2 bg-gray_dd" />
          <li
            className="flex items-center w-full h-10 px-4 cursor-pointer hover:bg-gray_f7"
            role="presentation"
            onClick={logout}
          >
            로그아웃
          </li>
        </ul>
      )}
    </OutsideClickHandler>
  );
};

export default HeaderUserProfile;
