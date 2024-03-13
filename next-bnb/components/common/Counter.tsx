import React from 'react';
import CounterMinusIcon from '@/public/static/svg/common/counter/counter_minus.svg';
import CounterPlusIcon from '@/public/static/svg/common/counter/counter_plus.svg';

interface IProps {
  label?: string;
  description?: string;
  value?: number;
  minValue?: number;
  increseNum?: number;
  onChange?: (value: number) => void;
}

const Counter: React.FC<IProps> = ({
  label,
  value = 1,
  minValue = 0,
  increseNum = 1,
  description,
  onChange,
}) => {
  return (
    <div className="flex w-full justify-between items-center ">
      <label className="text-base text-gray_48 font-semibold">
        {label}
        {description && (
          <span className="block text-sm text-gray_71">{description}</span>
        )}
      </label>
      <div className="flex justify-between items-center w-[120px]">
        <button
          className="size-8 flex justify-center items-center rounded-full border border-dark_cyan text-dark_cyan bg-white outline-none cursor-pointer
          text-[21px] disabled:opacity-30 disabled:cursor-not-allowed"
          type="button"
          disabled={value === minValue}
          onClick={() => {
            onChange && onChange(value - increseNum);
          }}
        >
          <CounterMinusIcon />
        </button>
        <p>{value}</p>
        <button
          className="size-8 flex justify-center items-center rounded-full border border-dark_cyan text-dark_cyan bg-white outline-none cursor-pointer
          text-[21px] disabled:opacity-30 disabled:cursor-not-allowed"
          type="button"
          onClick={() => {
            onChange && onChange(value + increseNum);
          }}
        >
          <CounterPlusIcon />
        </button>
      </div>
    </div>
  );
};

export default React.memo(Counter);
