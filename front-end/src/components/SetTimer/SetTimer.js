import React from 'react'
import { connect } from 'react-redux'

import Button from '../Button/Button'
import Timer from './Timer/Timer'

import * as actions from '../../store/actions/actions'

import styles from './setTimer.module.css'

function SetTimer({ setCounterActive, setCounterRunning, updateInfo }) {
    const startTimer = () => {
        setCounterActive()
        setCounterRunning()
        updateInfo("Timer Started")
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

const mapDispatchToProps = dispatch => ({
    setCounterActive: () => dispatch(actions.setIsCounterActive(true)),
    setCounterRunning: () => dispatch(actions.setIsCounterRunning(true)),
    updateInfo: (info) => dispatch(actions.updateInfoText(info))
})

export default connect(null, mapDispatchToProps)(SetTimer)