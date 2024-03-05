import React from 'react';
import CloseXIcon from '@/public/static/svg/modal/modal_colose_x_icon.svg';
import MailIcon from '@/public/static/svg/auth/mail.svg';
import PersonIcon from '@/public/static/svg/auth/person.svg';
import OpenedEyeIcon from '@/public/static/svg/auth/opened_eye.svg';
import ClosedEyeIcon from '@/public/static/svg/auth/closed_eye.svg';

const SignUpModal: React.FC = () => {
  return (
    <div className="w-[568px] h-[614px] bg-white z-[11] p-8">
      <CloseXIcon className="cursor-pointer block ml-auto mb-10" />
      <div className="relative mb-4">
        <input
          className="input"
          type="email"
          name="email"
          placeholder="이메일 주소"
        />
        <MailIcon className="absolute right-3 top-[16px]" />
      </div>

      <div className="relative mb-4">
        <input
          className="input"
          type="text"
          name="lastname"
          placeholder="이름(예: 길동)"
        />
        <PersonIcon className="absolute right-3 top-[16px]" />
      </div>

      <div className="relative mb-4">
        <input
          className="input"
          type="text"
          name="firstname"
          placeholder="성(예: 홍)"
        />
        <PersonIcon className="absolute right-3 top-[16px]" />
      </div>
      <div className="relative mb-4">
        <input
          className="input"
          type="password"
          name="password"
          placeholder="비밀번호 설정하기"
        />
        <OpenedEyeIcon className="absolute right-3 top-[16px]" />
      </div>
    </div>
  );
};

export default SignUpModal;
