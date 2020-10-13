import React from 'react'
import { connect } from 'react-redux'

import styles from './info.module.css'

function Info({ info }) {
    return (
        <div className={styles.Root}>
            {info &&
                <span className={styles.Text}>{info}</span>}
        </div>
    )
}

const mapStateToProps = state => ({
    info: state.status.info
})

export default connect(mapStateToProps)(Info)