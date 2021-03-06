import React from "react";
import PropTypes, { InferProps } from "prop-types";

import styles from "./BurgerIngredient.module.scss";

type BurgerIngredientProps = InferProps<typeof BurgerIngredient.propTypes>;

function BurgerIngredient(props: BurgerIngredientProps) {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={styles.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1}></div>
          <div className={styles.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={styles.Meat}></div>;
      break;
    case "cheese":
      ingredient = <div className={styles.Cheese}></div>;
      break;
    case "salad":
      ingredient = <div className={styles.Salad}></div>;
      break;
    case "bacon":
      ingredient = <div className={styles.Bacon}></div>;
      break;

    default:
      break;
  }

  return ingredient;
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
