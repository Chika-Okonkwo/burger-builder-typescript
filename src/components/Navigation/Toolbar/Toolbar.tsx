import React from 'react';

import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

interface Props {}

const Toolbar = (props: Props) => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <div className={classes.DesktopOnly}>
        <NavigationItems />
      </div>
    </header>
  );
};

export default Toolbar;
