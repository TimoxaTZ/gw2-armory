import React from 'react';
import styles from './main.module.css'
import {Header} from "./header/header";
import {Navbar} from "./navbar/navbar";
import {Content} from "./content/content";
import {Footer} from "./footer/footer";
import {Container} from "@material-ui/core";
import {Route} from "react-router-dom";
import {Login} from "../features/Login/Login";
import Huynya from "../huynya";


export const Main = () => {
    return (
        <Container className={styles.style} >
            <Header/>
            <Route exact path={'/'} render={() => <Content/>}/>
            <Route exact path={'/login'} render={() => <Login/>}/>
                {/*<Navbar/>*/}

                {/*<Footer/>*/}
        </Container>
    )
}