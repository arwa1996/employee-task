import React from 'react';
import { Select as SelectEmployeeStatus } from 'antd';

type selectProps = {
  onChange?: (value: string) => void;
  placeholder?: string;
  options?: string[];
};

export const Select: React.FC<selectProps> = ({
  onChange,
  options,
  placeholder,
}) => {
  const { Option } = SelectEmployeeStatus;
  return (
    <SelectEmployeeStatus
      size='large'
      placeholder={placeholder}
      onChange={(value: string) => {
        if (onChange) onChange(value);
      }}
    >
      {options?.map((option, index) => (
        <Option value={option} key={index} on>
          {option}
        </Option>
      ))}
    </SelectEmployeeStatus>
  );
};
