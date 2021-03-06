import * as actionTypes from "./actionTypes";

// Timer Actions
export const updateTime = (deltaTime, timeType) => ({
  type: actionTypes.UPDATE_TIME,
  payload: {
    deltaTime: deltaTime,
    timeType: timeType,
  },
});

// Countdown Actions
export const setIsCounterActive = (status) => ({
  type: actionTypes.SET_IS_COUNTDOWN_ACTIVE,
  payload: {
    status: status,
  },
});

export const setIsCounterRunning = (status) => ({
  type: actionTypes.SET_IS_COUNTDOWN_RUNNING,
  payload: {
    status: status,
  },
});

// Info Actions
export const setInfoText = (text) => ({
  type: actionTypes.SET_INFO_TEXT,
  payload: {
    text: text,
  },
});

export const clearInfoText = () => ({
  type: actionTypes.CLEAR_INFO_TEXT,
});

let infoTimer = null;
export const updateInfoText = (text, delay = 2000) => (dispatch) => {
  if (infoTimer) {
    dispatch(clearInfoText());
    clearTimeout(infoTimer);
    infoTimer = null;
  }
  setTimeout(() => {
    dispatch(setInfoText(text));
    infoTimer = setTimeout(() => dispatch(clearInfoText()), delay);
  }, 1);
};
