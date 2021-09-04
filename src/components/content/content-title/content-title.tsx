import styles from "./content-title.module.css"
import React from "react";

export const ContentTitle = () => {
    return (
        <div className={styles.inner}>
            <div>
                <h1 className={styles.title}>About GW2 Armory</h1>
            </div>
         </div>
    )
}