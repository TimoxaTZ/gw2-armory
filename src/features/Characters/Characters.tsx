import React, {useEffect} from 'react';
import {Container, Grid} from "@material-ui/core";
import {useDispatch} from "react-redux";
import styles from './characters.module.css'
import {getCharactersTC} from "./characters-reducer";
import {useAppSelector} from "../../app/useAppSelector";
import {NavLink, Redirect, Route} from "react-router-dom";
import { Character } from './Character/Character';
import { Login } from '../Login/Login';
import {CharacterType} from "../../api/gw2-api";


export const Characters = (props: any) => {


    // const dispatch = useDispatch();
    // // const characters = useSelector<AppRootStateType, Array<CharacterType>>(state => state.characters.characters)
    // const characters = useAppSelector(state => state.characters.characters)
    //
    // useEffect(() => {
    //     dispatch(getCharactersTC("D49F610A-5D10-0D4C-986A-B7469B305227A200CF65-E569-44AD-8403-2DF8D5C960D1"));
    // }, [dispatch])

    // @ts-ignore

    return (
        <div className={styles.intro}>

                <Grid container
                    direction="row"
                    item xs zeroMinWidth
                    justifyContent="center"
                    alignItems="center">

                    {props.characters.map((c:any) =>
                                <div className={styles.textfield}>
                                    <NavLink className={styles.nav} to={`/characters/${c.name}`}>
                                        <span>
                                            {c.name}
                                        </span>
                                    </NavLink>

                                    <Route exact path={`/characters/${c.name}`} render={() => <Character name={c.name}/>}/>

                                </div>)}
                </Grid>
        </div>
    )
}




