import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<IProps> = ({ children, ...props }) => {
  return (
    <button
      className="w-full h-[48px] border-none rounded-md bg-bittersweet text-white text-base font-extrabold outline-none cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
