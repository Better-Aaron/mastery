import React from 'react';

//* 버튼 색상 구하기
const getButtonColor = (color: string, colorReverse: boolean) => {
  if (colorReverse) {
    switch (color) {
      case 'dark_cyan':
        return 'border-2 border-dark_cyan text-dark_cyan bg-white';
      default:
        return 'border-2 border-black text-black bg-white';
    }
  }

  switch (color) {
    case 'dark_cyan':
      return 'bg-dark_cyan text-white';
    case 'bittersweet':
      return 'bg-bittersweet text-white';
    default:
      return 'bg-bittersweet';
  }
};

//* 버튼 크기 구하기
const getButtonSize = (size: 'small' | 'medium') => {
  switch (size) {
    case 'medium':
      return 'h-[48px]';
    case 'small':
      return 'h-[36px] text-base';
    default:
      return '';
  }
};

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: 'dark_cyan' | 'white' | 'bittersweet' | 'amaranth';
  size?: 'small' | 'medium';
  width?: string;
  colorReverse?: boolean;
  icon?: JSX.Element;
}

const Button: React.FC<IProps> = ({
  children,
  color,
  size = 'medium',
  width,
  colorReverse = false,
  icon,
  ...props
}) => {
  console.log(icon);
  const buttonStyle = `flex justify-center  items-center h-[48px] px-[15px] border-0 rounded-md text-[18px] font-semibold outline-none cursor-pointer ${
    width ? `w-[${width}]` : 'w-full'
  } ${getButtonColor(color || '', colorReverse)} ${getButtonSize(size)}`;
  return (
    <button {...props} className={buttonStyle}>
      {icon && <span className="mr-[12px]">{icon}</span>}
      {children}
    </button>
  );
};

export default React.memo(Button);
