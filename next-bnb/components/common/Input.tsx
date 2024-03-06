import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
}
const Input: React.FC<IProps> = ({ icon, ...props }) => {
  return (
    <div className="">
      <input {...props} className={icon ? "input" : "input px-[11px]"} />
      <div className={`absolute right-3 top-[16px]`}>{icon}</div>
    </div>
  );
};

export default Input;
