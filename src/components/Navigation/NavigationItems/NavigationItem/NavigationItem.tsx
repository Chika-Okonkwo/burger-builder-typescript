import React from 'react';

import classes from './NavigationItem.module.scss';

interface Props {
  children: string;
  path: string;
  // exact: boolean;
  active?: boolean;
}

const NavigationItem = (props: Props) => {
  return (
    <li className={classes.NavigationItem}>
      <a
        href={props.path}
        className={props.active ? classes.active : undefined}
      >
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;
