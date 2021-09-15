import React from 'react';
import styles from './header.module.css'
import logo from './../../assets/images/logo.jpg'
import {useAppSelector} from "../../app/useAppSelector";


export const Header = () => {

    // const token = localStorage.getItem('token')
    const token = useAppSelector(state => state.token.account.token)
    // const token = null;

    if (token !== null) {
        return (
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.header_inner}>
                        <div className={styles.header_logo}>
                            <img src={logo} className={styles.logo}/> Guild wars 2 armory
                        </div>
                        <nav className={styles.nav}>
                            <a href='/auth' className={styles.nav_link}>Change API-key</a>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header_inner}>
                    <div className={styles.header_logo}>
                        <img src={logo} className={styles.logo}/> Guild wars 2 armory
                    </div>
                    <nav className={styles.nav}>
                            <a href='/' className={styles.nav_link}>About</a>
                            <a href='/auth'  className={styles.nav_link}>Login</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}
