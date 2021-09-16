import React, {useEffect} from 'react';
import styles from './main.module.css'
import {Header} from "./header/header";
import {Content} from "./content/content";
import {CircularProgress, Container} from "@material-ui/core";
import {Route} from "react-router-dom";
import {Token} from "../features/Token/Token";
import {Characters} from "../features/Characters/Characters";
import {useAppSelector} from "../app/useAppSelector";
import {Character} from "../features/Characters/Character/Character";
import {getCharactersTC} from "../features/Characters/characters-reducer";
import {useDispatch} from "react-redux";
import {CharactersReducedType, StatusType} from "../app/app-types";


export const Main = () => {

    const token = localStorage.getItem('token')

    const dispatch = useDispatch();
    let status: StatusType = "loading";

    useEffect(() => {
        token && dispatch(getCharactersTC(token));
    }, [dispatch])

    const characters:CharactersReducedType = useAppSelector(state => state.characters.characters)

    characters ? status = 'succeed' : status = "loading"

    const urls = Object.keys(characters)

    // console.log(characters['Shico Player'].flags)

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
                    <Route exact path={'/auth'} render={() => <Token/>}/>
                    <Route exact path={'/characters'} render={() => <Characters characters={characters}/>}/>
                    {urls.map(id => {
                        return <Route exact path={`/characters/${id}`} render={() => <Character character={characters[id]}/>}/>
                    })}

                    {/*<Navbar/>*/}
                    {/*<Footer/>*/}
                </Container>
            </div>
        </div>
    )
}