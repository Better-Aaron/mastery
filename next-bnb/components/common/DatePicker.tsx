import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import ko from 'date-fns/locale/ko';
import { addHours } from 'date-fns';

const DatePicker: React.FC<ReactDatePickerProps> = ({
  className,
  onChange,
  ...props
}) => {
  return (
    <div className={`${className} w-full h-full`}>
      <ReactDatePicker
        {...props}
        popperPlacement="bottom-start"
        dateFormat="MM월 dd일"
        disabledKeyboardNavigation
        locale={ko}
        onChange={(date, event) => {
          if (date) {
            onChange(addHours(date as Date, 9), event);
          } else {
            onChange(null, event);
          }
        }}
      />
    </div>
  );
};

export default DatePicker;
