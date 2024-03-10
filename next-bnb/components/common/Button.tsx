import React from 'react';

//* 버튼 색상 구하기
const getButtonColor = (color: string) => {
  switch (color) {
    case 'dark_cyan':
      return 'bg-dark_cyan';
    default:
      return 'bg-bittersweet';
  }
};

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: 'dark_cyan';
}

const Button: React.FC<IProps> = ({ children, color, ...props }) => {
  return (
    <button
      className={`w-full h-[48px] border-none rounded-md bg-bittersweet text-white text-base px-[15px] font-extrabold outline-none cursor-pointer ${getButtonColor(
        color || ''
      )}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
