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
import {Characters} from "../features/Characters/Characters";
import {useAppSelector} from "../app/useAppSelector";
import {Character} from "../features/Characters/Character/Character";


export const Main = () => {

    // const characters = useAppSelector(state => state.characters.characters)
    // characters.map(c => <Route exact path={`/characters/${c.name}`} render={() => <Character/>}/>)


        return (
        <Container className={styles.style} >
            <Header/>
            <Route exact path={'/'} render={() => <Content/>}/>
            <Route exact path={'/login'} render={() => <Login/>}/>
            <Route exact path={'/characters'} render={() => <Characters/>}/>


                {/*<Navbar/>*/}
                {/*<Footer/>*/}
        </Container>
    )
}