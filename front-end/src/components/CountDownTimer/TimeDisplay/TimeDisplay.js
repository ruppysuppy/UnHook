import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import CountDown from './CountDown/CountDown'

import * as actions from '../../../store/actions/actions'

import timeTypes from '../../../constants/timeTypes'

import Logo from '../../../static/img/logo-white.png'

import styles from './time-display.module.css'

const getSeconds = time => {
    const seconds = time[timeTypes.hh] * 3600 + time[timeTypes.mm] * 60 + time[timeTypes.ss]
    return seconds
}

const getTime = seconds => {
    const time = {}
    time[timeTypes.hh] = Math.floor(seconds / 3600)
    seconds -= time[timeTypes.hh] * 3600
    time[timeTypes.mm] = Math.floor(seconds / 60)
    seconds -= time[timeTypes.mm] * 60
    time[timeTypes.ss] = seconds
    return time
}

let countdown = null

function TimeDisplay({ timer, resetCounterActive, resetCounterRunning, isCountdownRunning, updateInfo }) {
    const [secondsLeft, setSecondsLeft] = useState(getSeconds(timer))

    const clearTimer = () => {
        clearInterval(countdown)
        countdown = null
        resetCounterRunning()
    }

    const timerFunction = () => {
        setSecondsLeft(currSecondsLeft => {
            if (currSecondsLeft <= 1) {
                clearTimer()
                resetCounterActive()
                updateInfo("Time for a break!")
                new Notification("Work Time is up", {
                    body: "Time to take a break!",
                    icon: Logo
                })
            }
            return currSecondsLeft - 1
        })
    }

    useEffect(() => {
        countdown = setInterval(timerFunction, 1000)
        return clearTimer
    }, [])

    useEffect(() => {
        if (!isCountdownRunning) {
            clearTimer()
        } else {
            if (!countdown) {
                countdown = setInterval(timerFunction, 1000)
            }
        }
    }, [isCountdownRunning])

    const time = getTime(secondsLeft)

    return (
        <div className={styles.Root}>
            <CountDown time={time[timeTypes.hh]} />
            <span className={styles.Colon}>:</span>
            <CountDown time={time[timeTypes.mm]} />
            <span className={styles.Colon}>:</span>
            <CountDown time={time[timeTypes.ss]} />
        </div>
    )
}

const mapStateToProps = state => ({
    timer: state.timer,
    isCountdownRunning: state.status.isCountdownRunning
})

const mapDispatchToProps = dispatch => ({
    resetCounterActive: () => dispatch(actions.setIsCounterActive(false)),
    resetCounterRunning: () => dispatch(actions.setIsCounterRunning(false)),
    updateInfo: (info) => dispatch(actions.updateInfoText(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(TimeDisplay)