import styles from "./button.module.css"
import React from "react";
import {NavLink} from "react-router-dom";

export type ButtonPropsType = {
    buttonUrl: string
    buttonName: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <div className={styles.button_style1_container}>
            <NavLink to={props.buttonUrl} className={styles.button_style1_nav}>
                <span className={styles.button_style1_nav_span}>
                 {props.buttonName}
                </span>
            </NavLink>

            {/*<NavLink className={styles.button_creative_nav} to={'/login'}>*/}
            {/*    <span className={styles.button_creative_nav_span}>*/}
            {/*     Change API-token*/}
            {/*    </span>*/}
            {/*</NavLink>*/}
        </div>
    )
}