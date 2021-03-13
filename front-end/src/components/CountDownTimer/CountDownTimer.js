import React from "react";
import { connect } from "react-redux";

import Button from "../Button/Button";
import TimeDisplay from "./TimeDisplay/TimeDisplay";

import * as actions from "../../store/actions/actions";

import styles from "./countdown-timer.module.css";

function CountDownTimer({
  isCountdownRunning,
  resetCounterActive,
  resetCounterRunning,
  setCounterRunning,
  updateInfo,
}) {
  const playHandler = () => {
    setCounterRunning();
    updateInfo("Play");
  };

  const pauseHandler = () => {
    resetCounterRunning();
    updateInfo("Pause");
  };

  const stopHandler = () => {
    resetCounterActive();
    resetCounterRunning();
    updateInfo("Stop");
  };

  return (
    <div className={styles.Root}>
      <TimeDisplay />
      <div className={styles.BtnContainer}>
        {isCountdownRunning ? (
          <Button isSecondary onClick={pauseHandler}>
            <i className="fa fa-pause" aria-hidden="true"></i>
          </Button>
        ) : (
          <Button isSuccess onClick={playHandler}>
            <i className="fa fa-play" aria-hidden="true"></i>
          </Button>
        )}
        <Button isDanger onClick={stopHandler}>
          <i className="fa fa-stop" aria-hidden="true"></i>
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isCountdownRunning: state.status.isCountdownRunning,
});

const mapDispatchToProps = (dispatch) => ({
  resetCounterActive: () => dispatch(actions.setIsCounterActive(false)),
  resetCounterRunning: () => dispatch(actions.setIsCounterRunning(false)),
  setCounterRunning: () => dispatch(actions.setIsCounterRunning(true)),
  updateInfo: (info) => dispatch(actions.updateInfoText(info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountDownTimer);
