import React, {useEffect} from 'react';
import {CircularProgress, Container, Grid} from "@material-ui/core";
import {useDispatch} from "react-redux";
import styles from './characters.module.css'
import {getCharactersTC} from "./characters-reducer";
import {useAppSelector} from "../../app/useAppSelector";
import {NavLink, Redirect, Route} from "react-router-dom";
import { Character } from './Character/Character';
import { Token } from '../Token/Token';
import {CharacterType} from "../../api/gw2-api";
import {StatusType} from "./Character/Equipment/ItemsToRender/items-reducer";
import {Header} from "../../components/header/header";


export const Characters = (props: {characters:string[]}) => {

    const token = localStorage.getItem('token')

    const dispatch = useDispatch();

    useEffect(() => {
        token && dispatch(getCharactersTC(token));
    }, [dispatch])


    return (
        <div className={styles.intro}>

                <Grid container
                    direction="row"
                    item xs zeroMinWidth
                    justifyContent="center"
                    alignItems="center">

                    {props.characters.map((character:string) =>
                                <div className={styles.textfield}>
                                    <NavLink className={styles.nav} to={`/characters/${character}`}>
                                        <span>
                                            {character}
                                        </span>
                                    </NavLink>
                                </div>)//
                    }
                </Grid>
        </div>
    )
}




