import Link from 'next/link';
import React, { useCallback, useEffect, useMemo } from 'react';
import BackArrowIcon from '@/public/static/svg/register/register_room_footer_back_arrow.svg';
import Button from '../common/Button';
import useValidateMode from '@/hooks/useValidateMode';
interface IProps {
  prevHref?: string;
  nextHref?: string;
  isValid?: boolean;
}

const RegisterRoomFooter: React.FC<IProps> = ({
  prevHref,
  nextHref,
  isValid,
}) => {
  const { setValidateMode } = useValidateMode();

  useEffect(() => {
    return () => {
      setValidateMode(false);
    };
  }, []);

  //* 계속 버튼 클릭시
  const onClickEvent = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!isValid) {
      event.preventDefault();
      setValidateMode(true);
    }
  };

  return (
    <footer className="fixed bottom-0 flex justify-between w-[548px] h-[82px] items-center pt-[14px] px-[30px] pb-[20px] bg-white z-10 border-t border-gray_dd">
      <Link href={prevHref || ''}>
        <div className="flex items-center text-dark_cyan cursor-pointer">
          <BackArrowIcon className="mr-2" />
        </div>
      </Link>
      <Link href={nextHref || ''}>
        <Button color="dark_cyan" onClick={onClickEvent}>
          계속
        </Button>
      </Link>
    </footer>
  );
};

export default RegisterRoomFooter;
