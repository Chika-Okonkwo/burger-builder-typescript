import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';

interface Props {}

const NavigationItems = (props: Props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem path="/" active>
        Builder
      </NavigationItem>
      <NavigationItem path="/check-out">Checkout</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
