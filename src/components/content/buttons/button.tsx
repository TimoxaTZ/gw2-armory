import styles from "./button.module.css"
import React from "react";

export const Button = () => {
    return (
        <div>
            <a className={styles.button} href='#'>Learn more</a>
        </div>
    )
}