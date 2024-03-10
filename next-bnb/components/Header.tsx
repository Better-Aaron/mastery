'use client';
import useModal from '@/hooks/useModal';
import HamburgerIcon from '@/public/static/svg/header/hamburger.svg';
import AirbnbLogoIcon from '@/public/static/svg/logo/logo.svg';
import AirbnbLogoTextIcon from '@/public/static/svg/logo/logo_text.svg';
import { setAuthMode } from '@/store/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import AuthModal from './auth/AuthModal';
import OutsideClickHandler from 'react-outside-click-handler';
import { logoutAPI } from '@/lib/api/auth';
import { initUser } from '@/store/features/users/usersSlice';

const Header: React.FC = () => {
  const { openModal, ModalPortal, closeModal } = useModal();
  const [isUsermenuOpened, setIsUsermenuOpened] = useState(false);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const logout = async () => {
    try {
      await logoutAPI();
      dispatch(initUser());
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <header className="sticky top-0 w-full flex justify-between items-center h-[80px] px-[40px] shadow-sm z-50">
      <a href="/" className="flex items-center">
        <AirbnbLogoIcon className="mr-1.5" />
        <AirbnbLogoTextIcon />
      </a>
      {!user.isLogged ? (
        <div>
          <button
            className="h-[42px] mr-2 px-4 border-none bg-white cursor-pointer outline-none hover:bg-gray_f7"
            type="button"
            onClick={() => {
              dispatch(setAuthMode('signup'));
              openModal();
            }}
          >
            회원가입
          </button>
          <button
            className="h-[42px] px-4 border-none shadow-sm rounded-lg bg-white cursor-pointer outline-none hover:shadow-lg "
            onClick={() => {
              dispatch(setAuthMode('login'));
              openModal();
            }}
          >
            로그인
          </button>
        </div>
      ) : (
        <OutsideClickHandler
          onOutsideClick={() => {
            if (isUsermenuOpened) {
              setIsUsermenuOpened(false);
            }
          }}
        >
          <button
            type="button"
            className="flex items-center h-11 pr-1.5 pl-4 border-none shadow-sm rounded-[21px] bg-white cursor-pointer outline-none hover:shadow-md"
            onClick={() => setIsUsermenuOpened(!isUsermenuOpened)}
          >
            <HamburgerIcon />
            {/* <img src={user.profileImage} className="" /> */}
            <Image
              className="ml-2 rounded-full"
              src="/static/image/user/default_user_profile_image.jpg"
              width={30}
              height={30}
              alt=""
            />
          </button>
          {isUsermenuOpened && (
            <ul className="absolute right-0 top-14 w-[240px] py-2 shadow rounded-lg bg-white">
              <li className="flex items-center w-full h-10 px-4 cursor-pointer hover:bg-gray_f7">
                숙소관리
              </li>
              <Link href="/room/register/building">
                <button
                  role="presentation"
                  onClick={() => setIsUsermenuOpened(false)}
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
      )}

      <ModalPortal>
        <AuthModal closeModal={closeModal} />
      </ModalPortal>
    </header>
  );
};

export default Header;
