import { useAppSelector } from '@/store/hooks';
import React from 'react';
import { useSelector } from 'react-redux';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  isValid?: boolean;
  validateMode?: boolean;
  useValidation?: boolean;
  errorMessage?: string;
}
const Input: React.FC<IProps> = ({
  icon,
  isValid = false,
  useValidation = true,
  errorMessage,
  ...props
}) => {
  const validateMode = useAppSelector((state) => state.common.validateMode);

  const divStyle = `relative w-full h-[46px] ${
    !!icon ? 'pr-11 pl-[11px]' : 'px-[11px]'
  } border  rounded text-base placeholder:text-gray_76  ${
    useValidation && validateMode && !isValid
      ? 'bg-snow border-orange focus:border-orange'
      : 'border-gray_eb focus:border-dark_cyan'
  } ${useValidation && validateMode && isValid ? 'border-dark_cyan' : ''}`;

  return (
    <div>
      <input {...props} className={divStyle} />
      <span className="absolute right-[15px] h-[46px] top-[15px]">{icon}</span>
      {useValidation && validateMode && !isValid && errorMessage && (
        <p className="mt-2 font-semibold text-sm text-tawny">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
