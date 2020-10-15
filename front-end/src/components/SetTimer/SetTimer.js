import React from 'react'
import { connect } from 'react-redux'

import Button from '../Button/Button'
import Timer from './Timer/Timer'

import timeTypes from '../../constants/timeTypes'

import * as actions from '../../store/actions/actions'

import styles from './setTimer.module.css'

const { ipcRenderer } = window.require('electron');

const formatTime = (time) => ("0" + time).slice(-2);

const getSeconds = time => {
    const seconds = time[timeTypes.hh] * 3600 + time[timeTypes.mm] * 60 + time[timeTypes.ss]
    return seconds
}

function SetTimer({ setCounterActive, setCounterRunning, timer, updateInfo }) {
    const startTimer = () => {
        if (getSeconds(timer) >= 10) {
            setCounterActive()
            setCounterRunning()
            updateInfo("Timer Started")

            // STORE DATA
            ipcRenderer.send("time:save", timer)
            // UPDATE UI
            ipcRenderer.send(
                "timer:update",
                `${formatTime(timer[timeTypes.hh])}:${formatTime(timer[timeTypes.mm])}:${formatTime(timer[timeTypes.ss])}`
            )
        } else {
            updateInfo("Min Time Slot: 10 secs")
        }
    }

    return (
        <div className={styles.Root}>
            <Timer />
            <Button
                isSuccess
                style={{
                    margin: "32px"
                }}
                onClick={startTimer}
            >
                <i className="fa fa-play" aria-hidden="true"></i>
            </Button>
        </div>
    )
}

const mapStateToProps = state => ({
    timer: state.timer
})

const mapDispatchToProps = dispatch => ({
    setCounterActive: () => dispatch(actions.setIsCounterActive(true)),
    setCounterRunning: () => dispatch(actions.setIsCounterRunning(true)),
    updateInfo: (info) => dispatch(actions.updateInfoText(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(SetTimer)