import styles from "./button.module.css"
import React from "react";
import {NavLink} from "react-router-dom";

export type ButtonPropsType = {
    buttonUrl: string
    buttonName: string
    buttonStyle: 1 | 2;
}

const highlight = {
    1: styles.button_style1_nav,
    2: styles.button_style2_nav
}


export const Button = (props: ButtonPropsType) => {
    return (
        <div className={styles.button_style_container}>
            <NavLink to={props.buttonUrl} className={highlight[props.buttonStyle]}>
                <span className={styles.button_style_nav_span}>
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