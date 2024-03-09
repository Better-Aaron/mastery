import useValidateMode from '@/hooks/useValidateMode';
import React from 'react';

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  disabledOptions?: string[];
  value?: string;
  isValid?: boolean;
}
const Selector: React.FC<IProps> = ({
  options = [],
  disabledOptions = [],
  isValid,
  ...props
}) => {
  const { validateMode } = useValidateMode();

  const selectStyle = `w-full h-full  px-3 bg-white border  rounded-md outline-none appearance-none bg-[url('/static/svg/common/selector/selector_down_arrow.svg')] bg-no-repeat bg-[center_right_11px] text-base focus:border-dark_cyan
  ${
    validateMode
      ? !!isValid
        ? 'border-dark_cyan bg-white'
        : 'border-tawny bg-snow'
      : 'border-gray_eb'
  }`;

  return (
    <div className="w-full h-[46px]">
      <select {...props} className={selectStyle}>
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
    </div>
  );
};

export default Selector;
