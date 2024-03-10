import useValidateMode from '@/hooks/useValidateMode';
import React from 'react';
import WarningIcon from '@/public/static/svg/common/warning.svg';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: any;
  onChange?: (value: any) => void;
  options?: { label: string; value: any; description?: string }[];
  isValid?: boolean;
  errorMessage?: string;
}
const RadioGroup: React.FC<IProps> = ({
  label,
  value,
  options = [],
  onChange,
  isValid,
  errorMessage = '옵션을 선택하세요',
}) => {
  const { validateMode } = useValidateMode();

  const inputStyle = `w-4 h-4 m-0 relative mr-3 shrink-0 text-base appearance-none border border-gray_b0 rounded-full outline-none cursor-pointer checked:after:content-[''] checked:after:w-1.5 checked:after:h-1.5 checked:after:m-auto checked:after:absolute checked:after:top-0 checked:after:left-0 checked:after:right-0 checked:after:bottom-0 checked:after:bg-white checked:after:rounded-full checked:after:block checked:bg-dark_cyan checked:border-0 ${
    validateMode ? (!isValid ? 'border-tawny bg-snow' : 'border-dark_cyan') : ''
  }`;

  return (
    <div>
      <p className="text-base font-semibold text-gray_76 mb-8 after:bloc after:content-[''] after:clear-both">
        {label}
      </p>
      <div className="after:block after:content-[''] after:clear-both">
        {options.map((option, index) => (
          <label
            key={index}
            className="float-left mb-6 text-base leading-[1.2] cursor-pointer clear-both last:mb-0"
          >
            <input
              className={inputStyle}
              type="radio"
              checked={value === option.value}
              onChange={() => onChange && onChange(option.value)}
            />
            <span>
              {option.label}
              <span className="block mt-[5px] ml-[28px]">
                {option.description}
              </span>
            </span>
          </label>
        ))}
      </div>

      {validateMode && !isValid && (
        <div className="mt-2 flex items-center">
          <WarningIcon className="mr-1" />
          <p className="text-xs text-davidson_orange">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default RadioGroup;
