import React from 'react';
import styles from './main.module.css'
import {Header} from "./header/header";
import {Navbar} from "./navbar/navbar";
import {Content} from "./content/content";
import {Footer} from "./footer/footer";
import {Container} from "@material-ui/core";


export const Main = () => {
    return (
        <Container className={styles.style} >
                <Header/>
                {/*<Navbar/>*/}
                <Content/>
                {/*<Footer/>*/}
        </Container>
    )
}