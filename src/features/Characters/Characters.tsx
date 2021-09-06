import React, {useEffect} from 'react';
import {Grid, Paper} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import styles from "../../components/content/content-filling/content-filling.module.css";
import {CharacterType} from "../../api/gw2-api";
import {AppRootStateType} from "../../app/store";
import {getCharactersTC} from "./characters-reducer";
import {useAppSelector} from "../../app/useAppSelector";


export const Characters = () => {

    const dispatch = useDispatch();
    // const characters = useSelector<AppRootStateType, Array<CharacterType>>(state => state.characters.characters)
    const characters = useAppSelector(state => state.characters.characters)

    useEffect(() => {
        dispatch(getCharactersTC("D49F610A-5D10-0D4C-986A-B7469B305227A200CF65-E569-44AD-8403-2DF8D5C960D1"));
    }, [dispatch])

    return (
        <div>
            <div className={styles.intro}>
                <Grid
                    direction="column"
                    item xs zeroMinWidth
                    justifyContent="center"
                    alignItems="center">
                    <div className={styles.textfield}>
                        {characters.map(c => <div>{c.name}</div>)}
                    </div>
                </Grid>
            </div>
        </div>
    )
}




