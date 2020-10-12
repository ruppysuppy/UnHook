import React from 'react'

import Timer from '../Timer/Timer'

import styles from './setTimer.module.css'

export default function SetTimer() {
    return (
        <div className={styles.Root}>
            <Timer />
        </div>
    )
}
