import React from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../app/useAppSelector";
import {CharacterType} from "../../../api/gw2-api";
import styles from './character.module.css'
import buttonStyles from './../../../components/content/buttons/button.module.css'
import {Button} from '../../../components/content/buttons/button';
import {ItemToRender} from "./Equipment/ItemsToRender/ItemToRender";
import {ItemsData} from "./Equipment/ItemsData";
import { useParams } from 'react-router-dom';

export const Character = () => {

const dispatch = useDispatch();

    // const characterName = useAppSelector(state => state.characters.characters.filter(c => c.name === props.name).map(currentCharacter => currentCharacter.name)[0])
    const {id} = useParams<{id: string}>()


    return (
        <div>
            <div className={styles.inner}>
                <h1 >
                    {/*{characterName}*/}
                    {id}
                </h1>
                <h2 >
                    {/*<ItemsToRender name={props.name}/>*/}
                    {/*<ItemsData name={props.name}/>*/}
                </h2>
            </div>
            <div className={buttonStyles.buttons}>
                <Button buttonUrl={'/characters'} buttonName='Back to characters list' buttonStyle={2}/>
            </div>
        </div>

    )
}