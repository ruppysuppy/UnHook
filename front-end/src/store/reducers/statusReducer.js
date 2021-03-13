import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isCountdownActive: false,
  isCountdownRunning: false,
  info: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  const stateCopy = { ...state };

  switch (type) {
    case actionTypes.SET_IS_COUNTDOWN_ACTIVE:
      stateCopy.isCountdownActive = payload.status;
      return stateCopy;

    case actionTypes.SET_IS_COUNTDOWN_RUNNING:
      stateCopy.isCountdownRunning = payload.status;
      return stateCopy;

    case actionTypes.SET_INFO_TEXT:
      stateCopy.info = payload.text;
      return stateCopy;

    case actionTypes.CLEAR_INFO_TEXT:
      stateCopy.info = null;
      return stateCopy;

    default:
      return stateCopy;
  }
};

export default reducer;
