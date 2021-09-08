import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../app/useAppSelector";
import {CharacterType} from "../../../api/gw2-api";
import styles from './character.module.css'
import buttonStyles from './../../../components/content/buttons/button.module.css'
import textFieldButton from "./../characters.module.css"
import {getCharacterTC} from "./character-reducer";
import { Button } from '../../../components/content/buttons/button';
import {Grid} from "@material-ui/core";
import {NavLink, Route} from "react-router-dom";



export const Character = (props:CharacterType) => {


    const characterName = useAppSelector(state => state.characters.characters.filter(c => c.name === props.name).map(currentCharacter => currentCharacter.name)[0])
    // const characterItems = useAppSelector(state => state.characters.characters.filter(c => c.name === props.name).map(currentCharacter => currentCharacter.equipment)[0])
    //
    // console.log(characterItems)
    //
    // const helm = characterItems?.filter(c =>c.slot === 'Helm');
    // const shoulders = characterItems?.filter(c =>c.slot === 'Shoulders');
    // const coat = characterItems?.filter(c =>c.slot === 'Coat');
    //
    //
    // console.log(helm)
    // console.log(shoulders)
    // console.log(coat)
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getCharacterTC({apiKey: "D49F610A-5D10-0D4C-986A-B7469B305227A200CF65-E569-44AD-8403-2DF8D5C960D1", characterName: props.name}));
    // }, [dispatch, props.name])

    return (
        <div>
            <div className={styles.inner}>
                <h1>
                    {characterName}
                    {/*{character.name}*/}
                </h1>
            </div>
            <div className={buttonStyles.buttons} style={{padding: 400}}>
                <Button buttonUrl={'/characters'} buttonName='Back to characters list' buttonStyle={2}/>
            </div>
        </div>

    )
}