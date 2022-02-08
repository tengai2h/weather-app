import React, { FC, SyntheticEvent } from 'react';

interface IInputProps {
  className: string;
  onChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
  placeHolder?: string;
}

const Input: FC<IInputProps> = ({
  className,
  onChange,
  placeHolder,
}: IInputProps) => (
  <input
    className={className}
    onChange={onChange}
    type="text"
    placeholder={placeHolder}
  />
);

export default Input;
