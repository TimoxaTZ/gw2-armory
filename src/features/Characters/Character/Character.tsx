import React from 'react';
import styles from './character.module.css'
import buttonStyles from './../../../components/content/buttons/button.module.css'
import {Button} from '../../../components/content/buttons/button';
import {Items} from "./Equipment/Items/Items";
import {CharacterType} from "../../../app/app-types";


export const Character = (props: { character: CharacterType }) => {

    // if (props.character.flags === ['Beta']) {
    //     // console.log(props.character.name)
    //     return <div></div>
    // }

    return (
        <div>
            <div className={styles.inner}>
                <h1>
                    {props.character.name}
                </h1>
                <h2>
                    <Items equipment={props.character.equipment}/>
                </h2>
            </div>
            <div className={buttonStyles.buttons}>
                <Button buttonUrl={'/characters'} buttonName='Back to characters list' buttonStyle={2}/>
            </div>
        </div>

    )
}