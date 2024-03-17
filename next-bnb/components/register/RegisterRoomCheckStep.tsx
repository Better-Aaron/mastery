import Link from 'next/link';
import React from 'react';
import CheckMarkIcon from '@/public/static/svg/register/dark_cyan_check_mark.svg';
import Button from '../common/Button';

interface IProps {
  disabled: boolean;
  inProgress: boolean;
  step: string;
  href: string;
}
const RegisterRoomCheckStep: React.FC<IProps> = ({
  disabled,
  inProgress,
  step,
  href,
}) => {
  if (inProgress) {
    return (
      <li className="inline-block py-4">
        <Link href={href}>
          <p className="ml-[28px]">
            <span className="text-base font-semibold underline">{step}</span>
          </p>
        </Link>
        <Link href={href}>
          <p className="  mt-2 mb-[28px]">
            <Button color="dark_cyan" size="small" width="55px">
              계속
            </Button>
          </p>
        </Link>
      </li>
    );
  }

  if (disabled) {
    return (
      <li className="inline-block py-4">
        <p className="ml-[28px] text-base text-gray_76">{step}</p>
      </li>
    );
  }
  return (
    <li className="inline-block py-4">
      <Link href={href}>
        <p className="flex items-center gap-2">
          <CheckMarkIcon />
          <span className="text-base font-semibold underline">{step}</span>
        </p>
      </Link>
    </li>
  );
};

export default RegisterRoomCheckStep;
