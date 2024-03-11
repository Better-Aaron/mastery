import React from 'react';

//* 버튼 색상 구하기
const getButtonColor = (color: string) => {
  switch (color) {
    case 'dark_cyan':
      return 'bg-dark_cyan';
    case 'white':
      return 'bg-white';
    default:
      return 'bg-bittersweet';
  }
};

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: 'dark_cyan' | 'white';
  styleType?: 'normal' | 'register';
}

const Button: React.FC<IProps> = ({
  children,
  color,
  styleType = 'normal',
  ...props
}) => {
  const buttonStyle =
    styleType === 'normal'
      ? `w-full h-[48px] border-none rounded-md bg-bittersweet text-white text-base px-[15px] font-extrabold outline-none cursor-pointer ${getButtonColor(
          color || ''
        )}`
      : `w-[161px] h-[45px] border border-gray_c4 rounded-md bg-white text-gray_48 text-xl px-[15px] font-extrabold outline-none cursor-pointer ${getButtonColor(
          color || ''
        )}`;

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default React.memo(Button);
