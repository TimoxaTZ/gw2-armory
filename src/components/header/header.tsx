import React from 'react';
import styles from './header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header_inner}>
                    <div className={styles.header_logo}>Guild wars 2 armory</div>
                    <nav className={styles.nav}>
                        <a href='#' className={styles.nav_link}>About</a>
                        <a href='#' className={styles.nav_link}>Login</a>
                    </nav>
                </div>
            </div>
        </header>

    )
}
