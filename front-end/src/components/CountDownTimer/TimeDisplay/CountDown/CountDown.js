import React from "react";

import styles from "./countdown.module.css";

export default function CountDown({ time }) {
  return <div className={styles.Root}>{time}</div>;
}
