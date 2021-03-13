import React from "react";

import styles from "./button.module.css";

function Button({ children, isDanger, isSuccess, isSecondary, ...props }) {
  return (
    <>
      <button
        className={`${styles.Root} ${isDanger && styles.Danger} ${
          isSuccess && styles.Success
        } ${isSecondary && styles.Secondary}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
