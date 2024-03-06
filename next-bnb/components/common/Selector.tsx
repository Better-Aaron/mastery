import React from "react";

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  disabledOptions?: string[];
  value?: string;
}
const Selector: React.FC<IProps> = ({
  options = [],
  disabledOptions = [],
  ...props
}) => {
  return (
    <div className="w-full h-[46px]">
      <select
        {...props}
        className="w-full h-full  px-3 bg-white border border-gray_eb rounded-md outline-none appearance-none bg-[url('/static/svg/common/selector/selector_down_arrow.svg')] bg-no-repeat bg-[center_right_11px] text-base focus:border-dark_cyan"
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
    </div>
  );
};

export default Selector;
