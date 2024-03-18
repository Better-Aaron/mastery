import { useAppSelector } from '@/store/hooks';
import React from 'react';
import { useSelector } from 'react-redux';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  label?: string;
  isValid?: boolean;
  validateMode?: boolean;
  useValidation?: boolean;
  errorMessage?: string;
}
const Input: React.FC<IProps> = ({
  label,
  icon,
  isValid = false,
  useValidation = true,
  errorMessage,
  ...props
}) => {
  const validateMode = useAppSelector((state) => state.common.validateMode);

  const divStyle = `relative w-full h-[46px] ${
    !!icon ? 'pr-[44px] pl-[11px]' : 'px-[11px]'
  } border border-gray_eb rounded text-base outline-none placeholder:text-gray_76 focus:border-dark_cyan ${
    useValidation && validateMode && !isValid
      ? 'bg-snow border-orange focus:border-orange'
      : 'border-gray_eb focus:border-dark_cyan'
  } ${useValidation && validateMode && isValid ? 'border-dark_cyan' : ''}`;

  return (
    <div>
      {label && (
        <label>
          <span className="block mb-2">{label}</span>
          <input {...props} className={divStyle} />
        </label>
      )}
      {!label && <input {...props} className={divStyle} />}
      {/* <input {...props} className={divStyle} />
      <span className="absolute right-[15px] h-[46px] top-[15px]">{icon}</span>
      {useValidation && validateMode && !isValid && errorMessage && (
        <p className="mt-2 font-semibold text-sm text-tawny">{errorMessage}</p>
      )} */}
    </div>
  );
};

export default React.memo(Input);
