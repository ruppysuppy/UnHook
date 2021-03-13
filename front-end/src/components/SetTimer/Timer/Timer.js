import React from "react";

import TimerDial from "./TimerDial/TimerDial";

import styles from "./timer.module.css";

function Timer() {
  return (
    <div className={styles.Root}>
      <TimerDial timeType="hh" upperLimit={23} lowerLimit={0} boostAmt={6} />
      <span className={styles.Colon}>:</span>
      <TimerDial timeType="mm" upperLimit={59} lowerLimit={0} boostAmt={15} />
      <span className={styles.Colon}>:</span>
      <TimerDial timeType="ss" upperLimit={59} lowerLimit={0} boostAmt={15} />
    </div>
  );
}

export default Timer;
