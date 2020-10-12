import * as actionTypes from '../actions/actionTypes'

const initialState = {
    isCountdownActive: false,
    isCountdownRunning: false
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    const stateCopy = { ...state }

    switch (type) {
        case actionTypes.SET_IS_COUNTDOWN_ACTIVE:
            stateCopy.isCountdownActive = payload.status
            return stateCopy

        case actionTypes.SET_IS_COUNTDOWN_RUNNING:
            stateCopy.isCountdownRunning = payload.status
            return stateCopy

        default:
            return state;
    }
}

export default reducer