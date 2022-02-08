import React, { FC } from 'react';

interface Props {
  className: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  buttonText: React.ReactNode;
}

const Button: FC<Props> = ({
  className,
  type,
  buttonText,
  onClick,
}: Props) => (
  <button className={className} type={type} onClick={onClick}>
    {buttonText}
  </button>
);

Button.defaultProps = {
  type: 'button',
};

export default Button;
