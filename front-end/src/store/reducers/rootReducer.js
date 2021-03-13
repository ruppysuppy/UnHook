import { combineReducers } from "redux";

import timeReducer from "./timeReducer";
import statusReducer from "./statusReducer";

const rootReducer = combineReducers({
  timer: timeReducer,
  status: statusReducer,
});

export default rootReducer;
