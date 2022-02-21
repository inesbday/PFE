import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <nav className={styles.container}>
      <div className={`${styles.nav__element}`}>
        <p>Nav 1</p>
      </div>

      <div className={`${styles.nav__element}`}>
        <p>Nav 2</p>
      </div>

      <div className={`${styles.nav__element}`}>
        <p>Nav 3</p>
      </div>

      <div className={`${styles.nav__element}`}>
        <p>Nav 4</p>
      </div>

      <div className={`${styles.nav__element}`}>
        <p>Nav 5</p>
      </div>
    </nav>
  );
}

export default Sidebar;
