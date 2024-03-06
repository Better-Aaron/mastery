import React, { useState } from "react";
import CloseXIcon from "@/public/static/svg/modal/modal_colose_x_icon.svg";
import MailIcon from "@/public/static/svg/auth/mail.svg";
import PersonIcon from "@/public/static/svg/auth/person.svg";
import OpenedEyeIcon from "@/public/static/svg/auth/opened_eye.svg";
import ClosedEyeIcon from "@/public/static/svg/auth/closed_eye.svg";
import Input from "../common/Input";
import Selector from "../common/Selector";
import { dayList, monthList, yearList } from "@/lib/staticData";
import Button from "../common/Button";
import { signupAPI } from "@/lib/api/auth";

const SignUpModal: React.FC = () => {
  const [email, setEmail] = useState("k.aaron.kim@gmail.com");
  const [lastname, setLastname] = useState("minsam");
  const [firstname, setFirstname] = useState("kim");
  const [password, setPassword] = useState("1234");
  const [hidePassword, setHidePassword] = useState(true);

  const [birthYear, setBirthYear] = useState<string | undefined>();
  const [birthDay, setBirthDay] = useState<string | undefined>();
  const [birthMonth, setBirthMonth] = useState<string | undefined>();

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

  const onSubmitSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const signUpBody = {
        email,
        lastname,
        firstname,
        password,
        birthday: new Date(
          `${birthYear}-${birthMonth!.replace("월", "")}-${birthDay}`
        ).toISOString(),
      };

      await signupAPI(signUpBody);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      onSubmit={onSubmitSignUp}
      className="w-[568px] h-[614px] bg-white z-[11] p-8"
    >
      <CloseXIcon className="cursor-pointer block ml-auto mb-10" />
      <div className="relative mb-4">
        <Input
          className="input"
          placeholder="이메일 주소"
          type="email"
          icon={<MailIcon />}
          name="email"
          value={email}
          onChange={onChangeEmail}
        />
      </div>

      <div className="relative mb-4">
        <Input
          className="input"
          placeholder="이름(예: 길동)"
          icon={<PersonIcon />}
          value={lastname}
          onChange={onChangeLastname}
        />
      </div>

      <div className="relative mb-4">
        <Input
          className="input"
          placeholder="성(예: 홍)"
          icon={<PersonIcon />}
          value={firstname}
          onChange={onChangeFirstname}
        />
      </div>
      <div className="relative mb-4">
        <Input
          className="input "
          placeholder="비밀번호 설정하기"
          type={hidePassword ? "password" : "text"}
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
        />
      </div>

      <p className="font-semibold text-base mt-4 mb-2">생일</p>
      <p className="mb-4 text-charcoal">
        만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생을은 다른
        에어비앤비 이용자에게 공개되지 않습니다.
      </p>
      <div className="flex mb-6">
        <div className="w-1/3 mr-4">
          <Selector
            options={yearList}
            disabledOptions={["년"]}
            defaultValue="년"
            value={birthYear}
            onChange={onChangeBirthYear}
          />
        </div>
        <div className="flex-1 mr-4">
          <Selector
            options={monthList}
            disabledOptions={["월"]}
            defaultValue="월"
            value={birthMonth}
            onChange={onChangeBirthMonth}
          />
        </div>
        <div className="w-1/4 ">
          <Selector
            options={dayList}
            disabledOptions={["일"]}
            defaultValue="일"
            value={birthDay}
            onChange={onChangeBirthDay}
          />
        </div>
      </div>
      <div className="mb-4 pb-4 border-b border-b-gray_eb">
        <Button type="submit">가입하기</Button>
      </div>
    </form>
  );
};

export default SignUpModal;
