import React from 'react';
import styles from './main.module.css'
import {Header} from "./header/header";
import {Navbar} from "./navbar/navbar";
import {Content} from "./content/content";
import {Footer} from "./footer/footer";

export const Main = () => {
    return (
        <div className={styles.intro}>
            <Header/>
            {/*<Navbar/>*/}
            <Content/>
            {/*<Footer/>*/}
        </div>
    )
}