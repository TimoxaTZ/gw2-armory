import React, {useEffect} from 'react';
import {CharacterType} from "../../../api/gw2-api";
import styles from './character.module.css'
import buttonStyles from './../../../components/content/buttons/button.module.css'
import {Button} from '../../../components/content/buttons/button';
import {ItemToRender} from "./Equipment/ItemsToRender/ItemToRender";



export const Character = (props: {character: CharacterType}) => {

    return (
        <div>
            <div className={styles.inner}>
                <h1 >
                    {props.character.name}
                </h1>
                <h2 >
                    <ItemToRender equipment={props.character.equipment}/>
                </h2>
            </div>
            <div className={buttonStyles.buttons}>
                <Button buttonUrl={'/characters'} buttonName='Back to characters list' buttonStyle={2}/>
            </div>
        </div>

    )
}