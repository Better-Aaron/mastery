import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  ...props
}) => {
  return (
    <TextareaAutosize
      className="w-full relative min-h-[216px] p-[11px] border border-gray_eb outline-none resize-none text-inherit placeholder:text-gray_76 focus:border-dark_cyan"
      {...props}
      onResize={(e) => {}}
    />
  );
};

export default React.memo(Textarea);
