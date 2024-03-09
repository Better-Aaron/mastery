import React from 'react';
import RedIcon from '../../public/static/svg/auth/red_x_icon.svg';
import GreenCheckIcon from '../../public/static/svg/auth/green_check_icon.svg';

interface IProps {
  isValid: boolean;
  text: string;
}

const PasswordWarning: React.FC<IProps> = ({ isValid, text }) => {
  return (
    <div
      className={`flex items-center leading-normal ${
        isValid ? 'text-davidson_orange' : 'text-green'
      }`}
    >
      {isValid ? (
        <RedIcon className="mr-2" />
      ) : (
        <GreenCheckIcon className="mr-2" />
      )}
      {text}
    </div>
  );
};

export default PasswordWarning;
