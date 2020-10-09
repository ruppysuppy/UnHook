import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/actions'

import timeTypes from '../../../store/constants/timeTypes'

function TimerDial({ timeType, time, increment, decrement, upperLimit, lowerLimit, boostAmt, addSlice, subtractSlice }) {
    console.log(upperLimit, lowerLimit, time[timeType]);
    return (
        <div>
            <button onClick={() => addSlice(timeTypes[timeType], boostAmt, upperLimit, time[timeType])} disabled={upperLimit <= time[timeType]}>
                ++
            </button>
            <button onClick={() => increment(timeTypes[timeType])} disabled={upperLimit <= time[timeType]}>+</button>
            {time[timeType]}
            <button onClick={() => decrement(timeTypes[timeType])} disabled={lowerLimit >= time[timeType]}>-</button>
            <button onClick={() => subtractSlice(timeTypes[timeType], boostAmt, lowerLimit, time[timeType])} disabled={lowerLimit >= time[timeType]}>
                --
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    time: {
        hh: state.hh,
        mm: state.mm,
        ss: state.ss,
    }
})

const mapDispatchToProps = dispatch => ({
    increment: (timeType) => dispatch(actions.updateTime(1, timeType)),
    decrement: (timeType) => dispatch(actions.updateTime(-1, timeType)),
    addSlice: (timeType, amount, upperLimit, curr) => (
        dispatch(actions.updateTime(Math.min(amount, upperLimit - curr), timeType))
    ),
    subtractSlice: (timeType, amount, lowerLimit, curr) => (
        dispatch(actions.updateTime(Math.max(-amount, curr - lowerLimit), timeType))
    ),
})

export default connect(mapStateToProps, mapDispatchToProps)(TimerDial)