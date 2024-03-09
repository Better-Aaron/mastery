'use client';
import AirbnbLogoIcon from '@/public/static/svg/logo/logo.svg';
import AirbnbLogoTextIcon from '@/public/static/svg/logo/logo_text.svg';
import Link from 'next/link';
import SignUpModal from './auth/SignUpModal';
import useModal from '@/hooks/useModal';

const Header: React.FC = () => {
  const { openModal, ModalPortal, closeModal } = useModal();

  return (
    <header className="sticky top-0 w-full flex justify-between items-center h-[80px] px-[40px] shadow-sm z-50">
      <Link href="/" className="flex items-center">
        <AirbnbLogoIcon className="mr-1.5" />
        <AirbnbLogoTextIcon />
      </Link>
      <div>
        <button
          className="h-[42px] mr-2 px-4 border-none bg-white cursor-pointer outline-none hover:bg-gray_f7"
          type="button"
          onClick={openModal}
        >
          회원가입
        </button>
        <button className="h-[42px] px-4 border-none shadow-sm rounded-lg bg-white cursor-pointer outline-none hover:shadow-lg ">
          로그인
        </button>
      </div>
      <ModalPortal>
        <SignUpModal closeModal={closeModal} />
      </ModalPortal>
    </header>
  );
};

export default Header;
