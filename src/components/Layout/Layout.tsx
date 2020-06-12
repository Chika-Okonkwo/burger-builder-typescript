import React, { ReactElement } from "react";
import styles from "./Layout.module.scss";

interface Props {
  children?: any;
}

function Layout(props: Props): ReactElement {
  return (
    <>
      <div>Tooolbar, SIdeDrawer, Backdrop</div>
      <main className={styles.Content}>{props.children}</main>
    </>
  );
}

export default Layout;
