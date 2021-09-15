import React from 'react';
import styles from './header.module.css'
import logo from './../../assets/images/logo.jpg'
import {Login} from "../../features/Login/Login";
import {useAppSelector} from "../../app/useAppSelector";



export const Header = () => {

    // const token = localStorage.getItem('token')
    const token = useAppSelector(state => state.token.account.token)

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header_inner}>
                    <div className={styles.header_logo}>
                        <img src={logo} className={styles.logo}/> Guild wars 2 armory
                    </div>
                    <nav className={styles.nav}>
                        { token == null ? <a href='/' className={styles.nav_link}>About</a> : <div/>}
                        {
                            token == null ? <a href='/auth'  className={styles.nav_link}>Login</a>
                                :
                                <a href='/auth' className={styles.nav_link}>Change API-key</a>
                        }

                    </nav>
                </div>
            </div>
        </header>

    )
}
