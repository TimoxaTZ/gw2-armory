import React, {useEffect} from 'react';
import styles from './main.module.css'
import {Header} from "./header/header";
import {Content} from "./content/content";
import {CircularProgress, Container} from "@material-ui/core";
import {NavLink, Route} from "react-router-dom";
import {Login} from "../features/Login/Login";
import {Characters} from "../features/Characters/Characters";
import {useAppSelector} from "../app/useAppSelector";
import {Character} from "../features/Characters/Character/Character";
import {useDispatch} from "react-redux";
import {getCharactersTC} from "../features/Characters/characters-reducer";
import {getItemTC, StatusType} from "../features/Characters/Character/Equipment/ItemsToRender/items-reducer";


export const Main = () => {

    const status: StatusType = "succeed";
        // const characters = useAppSelector(state => state.characters.characters)
    // console.log('CHARACTERS: '+characters)
    // const urls = Object.keys(characters)

    if (status !== "succeed") {
        return (
            <div className={styles.header}>
                <div>
                    <Header/>
                </div>

                <div className={styles.background}>
                    <Container className={styles.style}>
                        <div className={styles.progressBar}>
                            <CircularProgress size={75} color={"inherit"}/>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }


    return (
        <div className={styles.header}>
            <div>
                <Header/>
            </div>
            <div className={styles.background}>
                <Container className={styles.style}>
                    <Route exact path={'/'} render={() => <Content/>}/>
                    <Route exact path={'/auth'} render={() => <Login/>}/>
                    {/*<Route exact path={'/characters'} render={() => <Characters characters={urls}/>}/>*/}

                    {/*{urls.map(c => {*/}
                    {/*    return <Route exact path={`/characters/:id`} render={() => <Character/>}/>*/}
                    {/*})}*/}

                    {/*<Navbar/>*/}
                    {/*<Footer/>*/}
                </Container>
            </div>
        </div>
    )
}