import * as actionTypes from './actionTypes'

export const updateTime = (deltaTime, timeType) => ({
    type: actionTypes.UPDATE_TIME,
    payload: {
        deltaTime: deltaTime,
        timeType: timeType
    }
})