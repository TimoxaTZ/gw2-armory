import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../app/useAppSelector";
import {CharacterType} from "../../../api/gw2-api";
import {inspect} from "util";
import styles from './character.module.css'
import {getCharacterTC} from "./character-reducer";
import {getCharactersTC} from "../characters-reducer";


export const Character = (props:CharacterType) => {

    const dispatch = useDispatch();
    const character = useAppSelector(state => state.character.character)

    useEffect(() => {
        dispatch(getCharacterTC({apiKey: "D49F610A-5D10-0D4C-986A-B7469B305227A200CF65-E569-44AD-8403-2DF8D5C960D1", characterName: props.name}));
    }, [dispatch, props.name])

    return (
        <div className={styles.inner}>
            <h1>
                {character.name}
            </h1>
        </div>
    )
}