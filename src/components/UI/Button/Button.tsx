import React from 'react';

import classes from './Button.module.scss';

interface Props {
  children: any;
  btnType: string;
  clicked: () => void;
}

const Button = (props: Props) => {
  return (
    <button
      className={[classes.Button, classes[props.btnType]].join(' ')}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;
