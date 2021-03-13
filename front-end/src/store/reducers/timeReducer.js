import * as actionTypes from "../actions/actionTypes";

import timeTypes from "../../constants/timeTypes";

const initialState = {
  hh: 0,
  mm: 0,
  ss: 0,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.UPDATE_TIME:
      const stateCopy = { ...state };

      switch (payload.timeType) {
        case timeTypes.hh:
          stateCopy.hh += payload.deltaTime;
          break;

        case timeTypes.mm:
          stateCopy.mm += payload.deltaTime;
          break;

        case timeTypes.ss:
          stateCopy.ss += payload.deltaTime;
          break;

        default:
          break;
      }
      return stateCopy;

    default:
      return state;
  }
};

export default reducer;
