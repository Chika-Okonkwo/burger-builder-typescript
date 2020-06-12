import React from 'react';

import styles from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';

interface Props {
  ingredientAdded: (type: string) => void;
  ingredientRemoved: (type: string) => void;
  disabled: { [key: string]: number };
  price: number;
  purchasable: boolean;
  ordered: () => void;
}

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = (props: Props) => {
  return (
    <div className={styles.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          added={() => props.ingredientAdded(control.type)}
          removed={() => props.ingredientRemoved(control.type)}
          disabled={props.disabled[control.type]}
        />
      ))}
      <button
        disabled={!props.purchasable}
        className={styles.OrderButton}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
