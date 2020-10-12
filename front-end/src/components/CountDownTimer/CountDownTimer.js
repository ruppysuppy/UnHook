import React from 'react'
import { connect } from 'react-redux'

import Button from '../Button/Button'
import TimeDisplay from './TimeDisplay/TimeDisplay'

import * as actions from '../../store/actions/actions'

import styles from './countdown-timer.module.css'

function CountDownTimer({ setCounterActive, setCounterRunning }) {
    return (
        <div className={styles.Root}>
            <TimeDisplay />
            <div className={styles.BtnContainer}>
                <Button
                    isSecondary
                    onClick={setCounterRunning}
                >
                    <i className="fa fa-pause" aria-hidden="true"></i>
                </Button>
                <Button
                    isDanger
                    onClick={setCounterActive}
                >
                    <i className="fa fa-stop" aria-hidden="true"></i>
                </Button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setCounterActive: () => dispatch(actions.setIsCounterActive(false)),
    setCounterRunning: () => dispatch(actions.setIsCounterRunning(false))
})

export default connect(null, mapDispatchToProps)(CountDownTimer)