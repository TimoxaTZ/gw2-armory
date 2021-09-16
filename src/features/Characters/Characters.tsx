import React, {useEffect} from 'react';
import {Grid} from "@material-ui/core";
import {useDispatch} from "react-redux";
import styles from './characters.module.css'
import {CharactersReducedType, getCharactersTC} from "./characters-reducer";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../app/useAppSelector";


export const Characters = (props: {characters: CharactersReducedType}) => {

    const token = localStorage.getItem('token')

    const dispatch = useDispatch();

    useEffect(() => {
        token && dispatch(getCharactersTC(token));
    }, [dispatch])


    const charactersList = Object.keys(props.characters)

    return (
        <div className={styles.intro}>

                <Grid container
                    direction="row"
                    item xs zeroMinWidth
                    justifyContent="center"
                    alignItems="center">
                    {charactersList.map((character:string) =>
                                <div className={styles.textfield}>
                                    <NavLink className={styles.nav} to={`/characters/${character}`}>
                                        <span>
                                            {character}
                                        </span>
                                    </NavLink>
                                </div>)
                    }
                </Grid>
        </div>
    )
}




