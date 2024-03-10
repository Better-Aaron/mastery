import useValidateMode from '@/hooks/useValidateMode';
import { loginAPI } from '@/lib/api/auth';
import ClosedEyeIcon from '@/public/static/svg/auth/closed_eye.svg';
import MailIcon from '@/public/static/svg/auth/mail.svg';
import OpenedEyeIcon from '@/public/static/svg/auth/opened_eye.svg';
import CloseXIcon from '@/public/static/svg/modal/modal_colose_x_icon.svg';
import { setAuthMode } from '@/store/features/auth/authSlice';
import { useAppDispatch } from '@/store/hooks';
import React, { useEffect, useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import { setLoggedUser } from '@/store/features/users/usersSlice';

interface IPros {
  closeModal: () => void;
}
const LoginModal: React.FC<IPros> = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [hidePassword, setHidePassword] = useState(true);
  const { setValidateMode } = useValidateMode();

  const dispatch = useAppDispatch();

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  //* 이메일 주소 변경시
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  //* 회원가입 모달로 변경
  const changeToSignUpModal = () => {
    dispatch(setAuthMode('signup'));
  };

  //* 로그인 클릭 시
  const onSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setValidateMode(true);

    if (!email || !password) {
      alert('이메일과 비밀번호를 입력해주세요.');
    } else {
      const loginBody = { email, password };

      try {
        const { data } = await loginAPI(loginBody);
        dispatch(setLoggedUser(data));
        closeModal();
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    return () => {
      setValidateMode(false);
    };
  }, [setValidateMode]);

  return (
    <form className="w-[568px] p-8 bg-white z-11" onSubmit={onSubmitLogin}>
      <CloseXIcon className="cursor-pointer block ml-auto mb-10" />
      <div className="relative mb-4">
        <Input
          placeholder="이메일 주소"
          name="email"
          type="email"
          icon={<MailIcon />}
          value={email}
          onChange={onChangeEmail}
          isValid={email !== ''}
          errorMessage="이메일이 필요합니다."
        />
      </div>
      <div className="relative mb-4">
        <Input
          placeholder="비밀번호 설정하기"
          icon={
            hidePassword ? (
              <ClosedEyeIcon
                className="cursor-pointer"
                onClick={toggleHidePassword}
              />
            ) : (
              <OpenedEyeIcon
                className="cursor-pointer"
                onClick={toggleHidePassword}
              />
            )
          }
          type={hidePassword ? 'password' : 'text'}
          value={password}
          onChange={onChangePassword}
          isValid={password !== ''}
          errorMessage="비밀번호를 입력하세요"
        />
      </div>
      <div className="mb-4 pb-4 border-b border-gray_eb">
        <Button type="submit">로그인</Button>
      </div>

      <p>
        이미 에어비앤비 계정이 있나요?
        <span
          className="text-dark_cyan ml-2 cursor-pointer"
          onClick={changeToSignUpModal}
        >
          회원가입
        </span>
      </p>
    </form>
  );
};

export default LoginModal;
