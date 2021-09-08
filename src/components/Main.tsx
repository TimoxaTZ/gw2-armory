import React, {useEffect} from 'react';
import styles from './main.module.css'
import {Header} from "./header/header";
import {Content} from "./content/content";
import {Container} from "@material-ui/core";
import {Route} from "react-router-dom";
import {Login} from "../features/Login/Login";
import {Characters} from "../features/Characters/Characters";
import {useAppSelector} from "../app/useAppSelector";
import {Character} from "../features/Characters/Character/Character";
import {useDispatch} from "react-redux";
import {getCharactersTC} from "../features/Characters/characters-reducer";




export const Main = () => {

    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(getCharactersTC("D49F610A-5D10-0D4C-986A-B7469B305227A200CF65-E569-44AD-8403-2DF8D5C960D1"));
    }, [dispatch])

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