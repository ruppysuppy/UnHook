import React from 'react'

import styles from './button.module.css'

function Button({ children, isDanger, isSuccess, ...props }) {
    return (
        <>
            <button className={`${styles.Root} ${isDanger && styles.Danger} ${isSuccess && styles.Success}`} {...props}>
                {children}
            </button>
        </>
    )
}

export default Button