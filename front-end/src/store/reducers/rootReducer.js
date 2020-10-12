import { combineReducers } from 'redux'

import timeReducer from './timeReducer'

const rootReducer = combineReducers({
    timer: timeReducer
})

export default rootReducer