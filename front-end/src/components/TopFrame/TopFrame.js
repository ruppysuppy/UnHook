import React from "react";

import Logo from "../../static/img/logo-white.png";

import styles from "./topFrame.module.css";

function TopFrame() {
  return (
    <div className={styles.Root}>
      <img src={Logo} alt="Logo" className={styles.Image} />
      UnHook
    </div>
  );
}

export default TopFrame;
