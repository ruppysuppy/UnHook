import * as actionTypes from './actionTypes'

export const updateTime = (deltaTime, timeType) => ({
    type: actionTypes.UPDATE_TIME,
    payload: {
        deltaTime: deltaTime,
        timeType: timeType
    }
})

export const setIsCounterActive = (status) => ({
    type: actionTypes.SET_IS_COUNTDOWN_ACTIVE,
    payload: {
        status: status
    }
})

export const setIsCounterRunning = (status) => ({
    type: actionTypes.SET_IS_COUNTDOWN_RUNNING,
    payload: {
        status: status
    }
})