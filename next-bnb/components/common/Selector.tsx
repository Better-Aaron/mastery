import useValidateMode from '@/hooks/useValidateMode';
import React from 'react';
import WarningIcon from '@/public/static/svg/common/warning.svg';
import { useAppSelector } from '@/store/hooks';

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: string[];
  value?: string;
  isValid?: boolean;
  useValidation?: boolean;
  errorMessage?: string;
  type?: 'register' | 'normal';
  disabledOptions?: string[];
}
const Selector: React.FC<IProps> = ({
  label,
  options = [],
  isValid,
  useValidation = true,
  errorMessage = '옵션을 선택하세요.',
  type = 'normal',
  disabledOptions = [],
  ...props
}) => {
  const validateMode = useAppSelector((state) => state.common.validateMode);

  const normalSelectStyle = `w-full h-full  px-3 bg-white border  rounded-md outline-none px-[11px] appearance-none bg-[url('/static/svg/common/selector/selector_down_arrow.svg')] bg-no-repeat bg-[center_right_11px] text-base focus:border-dark_cyan
  ${
    validateMode
      ? !!isValid
        ? 'border-dark_cyan bg-white'
        : 'border-tawny bg-snow'
      : 'border-gray_eb'
  }`;

  const registerSelectStyle = `w-full h-[56px] px-3 bg-white border rounded-lg outline-none pr-[14px] pl-[12px] appearance-none  bg-[url('/static/svg/common/selector/register_selector_down_arrow.svg')] bg-no-repeat bg-[center_right_14px] text-base focus:border-dark_cyan
  ${
    validateMode
      ? !!isValid
        ? 'border-dark_cyan bg-white'
        : 'border-tawny bg-snow'
      : 'border-gray_b0'
  }`;

  const selectStyle =
    type === 'normal' ? normalSelectStyle : registerSelectStyle;

  return (
    <div className={`w-full ${type === 'normal' ? 'h-[46px]' : ''}`}>
      <label className="relative">
        {label && (
          <span className="block text-base text-gray_76 font-semibold mb-2">
            {label}
          </span>
        )}
        <select
          {...props}
          className={`${selectStyle} disabled:bg-[url('/static/svg/common/selector/disabled_register_selector_down_arrow.svg')] disabled:bg-gray_f7 disabled:border-gray_e5 disabled:text-gray_e5 disabled:cursor-not-allowed`}
        >
          {disabledOptions.map((option, index) => (
            <option key={index} value={option} disabled>
              {option}
            </option>
          ))}

          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      {useValidation && validateMode && !isValid && (
        <div className="mt-2 flex items-center">
          <WarningIcon className="mr-1" />
          <p className="text-xs text-davidson_orange">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default React.memo(Selector);
