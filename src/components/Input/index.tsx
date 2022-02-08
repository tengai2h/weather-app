import React, { FC, SyntheticEvent } from 'react';

interface Props {
  className: string;
  onChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
  placeHolder?: string;
}

const Input: FC<Props> = ({ className, onChange, placeHolder }: Props) => (
  <input className={className} onChange={onChange} type="text" placeholder={placeHolder} />
);

export default Input;
