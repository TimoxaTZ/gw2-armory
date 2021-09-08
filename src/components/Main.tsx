import React from 'react';
import styles from './main.module.css'
import {Header} from "./header/header";
import {Content} from "./content/content";
import {Container} from "@material-ui/core";
import {Route} from "react-router-dom";
import {Login} from "../features/Login/Login";
import {Characters} from "../features/Characters/Characters";
import {useAppSelector} from "../app/useAppSelector";
import {Character} from "../features/Characters/Character/Character";


export const Main = () => {

    const characters = useAppSelector(state => state.characters.characters)

    return (
        <div className={styles.header}>
            <div >
                <Header/>
            </div>
            <div className={styles.background}>
                <Container className={styles.style} >
                    <Route exact path={'/'} render={() => <Content/>}/>
                    <Route exact path={'/login'} render={() => <Login/>}/>
                    <Route exact path={'/characters'} render={() => <Characters/>}/>
                    {characters.map(c => {
                        return <Route exact path={`/characters/${c.name}`} render={() => <Character name={c.name}/>}/>
                    })}
                    {/*<Navbar/>*/}
                    {/*<Footer/>*/}
                </Container>
            </div>
        </div>
    )
}