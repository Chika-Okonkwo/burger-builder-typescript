import React from "react";

import styles from "./BuildControl.module.scss";

interface Props {
  label: String;
  added: (type: string) => void;
  removed: (type: string) => void;
  disabled: number;
}

const BuildControl = (props: Props) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button
        disabled={!!props.disabled}
        className={styles.Less}
        onClick={props.removed as any}
      >
        Less
      </button>
      <button className={styles.More} onClick={props.added as any}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
