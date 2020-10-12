import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import CountDown from './CountDown/CountDown'

import timeTypes from '../../../constants/timeTypes'

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

function TimeDisplay({ timer }) {
    const [secondsLeft, setSecondsLeft] = useState(0)

    useEffect(() => {
        setSecondsLeft(getSeconds(timer))
    }, [])

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
    timer: state.timer
})

export default connect(mapStateToProps)(TimeDisplay)