import useModal from '@/hooks/useModal';
import { setAuthMode } from '@/store/features/auth/authSlice';
import { useAppDispatch } from '@/store/hooks';
import React from 'react';
import AuthModal from './auth/AuthModal';

const HeaderAuths: React.FC = () => {
  const { openModal, ModalPortal, closeModal } = useModal();
  const dispatch = useAppDispatch();

  return (
    <>
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
      <ModalPortal>
        <AuthModal closeModal={closeModal} />
      </ModalPortal>
    </>
  );
};

export default HeaderAuths;
