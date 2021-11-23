import './Button.scss';
import { FC } from 'react';

type buttonProps ={
    className: string;
    buttonName: string;
    clickHundler?: () => void;
}

const Button:FC<buttonProps> = ({ className, buttonName, clickHundler }) => (

  <button
    className={className}
    onClick={clickHundler}
  >
    {buttonName}
  </button>

);

export default Button;
