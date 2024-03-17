import React from 'react';
interface IProps {
  value?: string[];
  onChange: (selected: string[]) => void;
  options?: string[];
}
const CheckboxGroup: React.FC<IProps> = ({
  value = [],
  onChange,
  options = [],
}) => {
  console.log(options);
  return (
    <div className="after:block after:content-[''] after:clear-both">
      {options.map((option) => (
        <label className="checkbox-label" key={option}>
          <input
            type="checkbox"
            checked={value?.includes(option)}
            onChange={(e) => {
              if (e.target.checked) {
                onChange([...value!, option]);
              } else {
                onChange(value.filter((_option) => _option !== option));
              }
            }}
          />
          <span />
          {option}
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
