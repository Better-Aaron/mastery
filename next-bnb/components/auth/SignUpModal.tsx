import React, { useEffect, useMemo, useState } from 'react';
import CloseXIcon from '@/public/static/svg/modal/modal_colose_x_icon.svg';
import MailIcon from '@/public/static/svg/auth/mail.svg';
import PersonIcon from '@/public/static/svg/auth/person.svg';
import OpenedEyeIcon from '@/public/static/svg/auth/opened_eye.svg';
import ClosedEyeIcon from '@/public/static/svg/auth/closed_eye.svg';
import Input from '../common/Input';
import Selector from '../common/Selector';
import { dayList, monthList, yearList } from '@/lib/staticData';
import Button from '../common/Button';
import { signupAPI } from '@/lib/api/auth';
import { useDispatch } from 'react-redux';
import { setLoggedUser } from '@/store/features/users/usersSlice';
import useValidateMode from '@/hooks/useValidateMode';
import PasswordWarning from './PasswordWarning';
import { setAuthMode } from '@/store/features/auth/authSlice';

interface IProps {
  closeModal: () => void;
}

//*비밀번호 최수 자리수
const PASSWORD_MIN_LENGTH = 8;
//* 선택할 수 없는 월 option
const disabledMoths = ['월'];
//* 선택할 수 없는 일 option
const disabledDays = ['일'];
//* 선택할 수 없는 년 option
const disabledYears = ['년'];

const SignUpModal = ({ closeModal }: IProps) => {
  const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const [birthYear, setBirthYear] = useState<string | undefined>();
  const [birthDay, setBirthDay] = useState<string | undefined>();
  const [birthMonth, setBirthMonth] = useState<string | undefined>();

  const [passwordFocused, setPasswordFocused] = useState(false);

  const onFocusPassword = () => {
    setPasswordFocused(true);
  };

  //* password가 이름이나 이메일을 포함
  const isPasswordHasNameOrEmail = useMemo(
    () =>
      !password ||
      !lastname ||
      password.includes(lastname) ||
      password.includes(email.split('@')[0]),
    [password, lastname, email]
  );

  //* 비밀번호가 최소 자리수 이상인지
  const isPasswordOverMinLength = useMemo(
    () => password.length >= PASSWORD_MIN_LENGTH,
    [password]
  );

  //* 비밀번호가 숫자나 특수기호 포함 여부
  const isPasswordHasNumberOrSymbol = useMemo(
    () =>
      !(
        /[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/g.test(password) ||
        /[0-9]/g.test(password)
      ),
    [password]
  );

  const { setValidateMode } = useValidateMode();

  const dispatch = useDispatch();

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(event.target.value);
  };

  const onChangeFirstname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeBirthMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthMonth(event.target.value);
  };

  const onChangeBirthDay = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthDay(event.target.value);
  };

  const onChangeBirthYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthYear(event.target.value);
  };

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  //* 회원 가입 폼 입력 값 확인하기
  const validateSignUpForm = () => {
    //* 인풋 값이 없음
    if (!email || !lastname || !firstname || !password) {
      return false;
    }
    //* 비밀번호 규칙 체크
    if (
      isPasswordHasNameOrEmail ||
      !isPasswordOverMinLength ||
      isPasswordHasNumberOrSymbol
    ) {
      return false;
    }

    //* 생년월일 셀렉터 값이 없을때
    if (!birthDay || !birthMonth || !birthYear) {
      return false;
    }
    return true;
  };

  const onSubmitSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setValidateMode(true);
    console.log(validateSignUpForm());

    if (!validateSignUpForm()) return;

    try {
      const signUpBody = {
        email,
        lastname,
        firstname,
        password,
        birthday: new Date(
          `${birthYear}-${birthMonth!.replace('월', '')}-${birthDay}`
        ).toISOString(),
      };

      const { data } = await signupAPI(signUpBody);

      dispatch(setLoggedUser(data));

      closeModal();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    return () => {
      setValidateMode(false);
    };
  }, []);

  //* 회원가입 모달로 변경
  const changeToLoginModal = () => {
    dispatch(setAuthMode('login'));
  };
  return (
    <form
      onSubmit={onSubmitSignUp}
      className="w-[568px] max-h-screen bg-white z-[11] p-8 overflow-auto"
    >
      <CloseXIcon
        className="cursor-pointer block ml-auto mb-10"
        onClick={closeModal}
      />
      <div className="relative mb-4">
        <Input
          className="input"
          placeholder="이메일 주소"
          type="email"
          icon={<MailIcon />}
          name="email"
          value={email}
          onChange={onChangeEmail}
          useValidation
          isValid={!!email}
          errorMessage="이메일은 필수입니다."
        />
      </div>

      <div className="relative mb-4">
        <Input
          className="input"
          placeholder="이름(예: 길동)"
          icon={<PersonIcon />}
          value={lastname}
          onChange={onChangeLastname}
          useValidation
          isValid={!!lastname}
          errorMessage="이름을 입력해주세요."
        />
      </div>

      <div className="relative mb-4">
        <Input
          className="input"
          placeholder="성(예: 홍)"
          icon={<PersonIcon />}
          value={firstname}
          onChange={onChangeFirstname}
          useValidation
          isValid={!!firstname}
          errorMessage="성을 입력해주세요."
        />
      </div>
      <div className="relative mb-4">
        <Input
          className="input "
          placeholder="비밀번호 설정하기"
          type={hidePassword ? 'password' : 'text'}
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
          value={password}
          onChange={onChangePassword}
          useValidation
          isValid={
            !isPasswordHasNameOrEmail &&
            isPasswordOverMinLength &&
            !isPasswordHasNumberOrSymbol
          }
          errorMessage="비밀번호를 입력해주세요."
          onFocus={onFocusPassword}
        />
      </div>
      {passwordFocused && password.length > 0 && (
        <>
          <PasswordWarning
            isValid={isPasswordHasNameOrEmail}
            text="비밀번호에 본인 이름이나 이메일 주소를 포함할 수 없습니다."
          />
          <PasswordWarning isValid={!isPasswordOverMinLength} text="최소 8자" />
          <PasswordWarning
            isValid={isPasswordHasNumberOrSymbol}
            text="숫자나 기호를 포함하세요."
          />
        </>
      )}

      <p className="font-semibold text-base mt-4 mb-2">생일</p>
      <p className="mb-4 text-charcoal">
        만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생을은 다른
        에어비앤비 이용자에게 공개되지 않습니다.
      </p>
      <div className="flex mb-6">
        <div className="w-1/3 mr-4">
          <Selector
            options={yearList}
            disabledOptions={['년']}
            defaultValue="년"
            value={birthYear}
            onChange={onChangeBirthYear}
            isValid={!!birthYear}
          />
        </div>
        <div className="flex-1 mr-4">
          <Selector
            options={monthList}
            disabledOptions={['월']}
            defaultValue="월"
            value={birthMonth}
            onChange={onChangeBirthMonth}
            isValid={!!birthMonth}
          />
        </div>
        <div className="w-1/4 ">
          <Selector
            options={dayList}
            disabledOptions={['일']}
            defaultValue="일"
            value={birthDay}
            onChange={onChangeBirthDay}
            isValid={!!birthDay}
          />
        </div>
      </div>
      <div className="mb-4 pb-4 border-b border-b-gray_eb">
        <Button type="submit">가입하기</Button>
      </div>
      <p>
        이미 에어비앤비 계정이 있나요?
        <span
          className="text-dark_cyan ml-2 cursor-pointer"
          role="presentation"
          onClick={changeToLoginModal}
        >
          로그인
        </span>
      </p>
    </form>
  );
};

export default SignUpModal;
