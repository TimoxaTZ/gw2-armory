import React from 'react';
import styles from './header.module.css'
import logo from './../../assets/images/logo.jpg'
import {useAppSelector} from "../../app/useAppSelector";


export const Header = () => {

    // const token = localStorage.getItem('token')
    const token = useAppSelector(state => state.token.account.token)
    // const token = null;

    return token && token.length > 1 ?
        (
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.header_inner}>
                        <div className={styles.header_logo}>
                            <img src={logo} className={styles.logo}/> Guild wars 2 armory
                        </div>
                        <nav className={styles.nav}>
                            {/*<a href='/auth' className={styles.nav_link}>Change API-key</a>*/} {/*default URL*/}
                            <a href='/gw2-armory/#/auth' className={styles.nav_link}>Change
                                API-key</a> {/*for github pages*/}
                        </nav>
                    </div>
                </div>
            </header>
        )

        : (
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.header_inner}>
                        <div className={styles.header_logo}>
                            <img src={logo} className={styles.logo}/> Guild wars 2 armory
                        </div>
                        <nav className={styles.nav}>
                            {/*<a href='/' className={styles.nav_link}>About</a>*/} {/*default URL*/}
                            {/*<a href='/auth'  className={styles.nav_link}>Login</a>*/} {/*default URL*/}
                            <a href='/gw2-armory/' className={styles.nav_link}>About</a> {/*for github pages*/}
                            <a href='/gw2-armory/#/auth' className={styles.nav_link}>Login</a> {/*for github pages*/}
                        </nav>
                    </div>
                </div>
            </header>
        )
}
