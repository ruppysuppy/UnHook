import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/actions'
import timeTypes from '../../../store/constants/timeTypes'

import Button from '../../Button/Button'

import styles from './timer-dial.module.css'

function TimerDial({ timeType, time, increment, decrement, upperLimit, lowerLimit, boostAmt, addSlice, subtractSlice }) {
    return (
        <div className={styles.Root}>
            <Button
                onClick={() => addSlice(timeTypes[timeType], boostAmt, upperLimit, time[timeType])}
                disabled={upperLimit <= time[timeType]}>
                <i class={`fa fa-angle-double-up ${styles.Icon}`} aria-hidden="true" />
            </Button>
            <Button
                onClick={() => increment(timeTypes[timeType])}
                disabled={upperLimit <= time[timeType]}>
                <i class={`fa fa-angle-up ${styles.Icon}`} aria-hidden="true" />
            </Button>
            {time[timeType]}
            <Button
                onClick={() => decrement(timeTypes[timeType])}
                disabled={lowerLimit >= time[timeType]}>
                <i class={`fa fa-angle-down ${styles.Icon}`} aria-hidden="true" />
            </Button>
            <Button
                onClick={() => subtractSlice(timeTypes[timeType], boostAmt, lowerLimit, time[timeType])}
                disabled={lowerLimit >= time[timeType]}>
                <i class={`fa fa-angle-double-down ${styles.Icon}`} aria-hidden="true" />
            </Button>
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
        dispatch(actions.updateTime(Math.max(-amount, lowerLimit - curr), timeType))
    ),
})

export default connect(mapStateToProps, mapDispatchToProps)(TimerDial)