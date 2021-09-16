import React from 'react';
import {Grid} from "@material-ui/core";
import styles from './characters.module.css'
import {NavLink} from "react-router-dom";
import {CharactersReducedType} from "../../app/app-types";


export const Characters = (props: { characters: CharactersReducedType }) => {


    const characters: CharactersReducedType = props.characters
    const charactersList: string[] = Object.keys(characters)

    return (
        <div className={styles.intro}>

            <Grid container
                  direction="row"
                  item xs zeroMinWidth
                  justifyContent="center"
                  alignItems="center">
                {charactersList.map((character: string) =>
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




