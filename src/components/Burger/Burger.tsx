import React from "react";
import PropTypes, { InferProps } from "prop-types";

import styles from "./Burger.module.scss";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const propTypes = {
  ingredients: PropTypes.shape({
    salad: PropTypes.number,
    bacon: PropTypes.number,
    cheese: PropTypes.number,
    meat: PropTypes.number,
  }).isRequired,
};

type Props = InferProps<typeof propTypes>;

interface Prop {
  ingredients: { [key: string]: number };
}

// const defaultProps = {
//   ingredients: {
//     salad: 0,
//     bacon: 0,
//     cheese: 1,
//     meat: 0,
//   },
//   totalPrice: 0,
// };

const Burger = (props: Prop) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = (<p>Please start adding ingredients</p>) as any;
  }
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = propTypes;
// Burger.defaultProps = defaultProps;

export default Burger;
