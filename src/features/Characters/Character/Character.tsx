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
    const characterItems = useAppSelector(state => state.characters.characters.filter(c => c.name === props.name).map(currentCharacter => currentCharacter.equipment)[0])

    // console.log(characterItems)

    const helm = characterItems?.filter(c =>c.slot === 'Helm')[0];
    const shoulders = characterItems?.filter(c =>c.slot === 'Shoulders')[0];
    const coat = characterItems?.filter(c =>c.slot === 'Coat')[0];
    const gloves = characterItems?.filter(c =>c.slot === 'Gloves')[0];
    const leggins = characterItems?.filter(c =>c.slot === 'Leggings')[0];
    const boots = characterItems?.filter(c =>c.slot === 'Boots')[0];

    const backpack = characterItems?.filter(c =>c.slot === 'Backpack')[0];
    const trinket1 = characterItems?.filter(c =>c.slot === 'Accessory1')[0];
    const trinket2 = characterItems?.filter(c =>c.slot === 'Accessory2')[0];
    const amulet = characterItems?.filter(c =>c.slot === 'Amulet')[0];
    const ring1 = characterItems?.filter(c =>c.slot === 'Ring1')[0];
    const ring2 = characterItems?.filter(c =>c.slot === 'Ring2')[0];


    const weaponA1 = characterItems?.filter(c =>c.slot === 'WeaponA1')[0];
    const weaponA2 = characterItems?.filter(c =>c.slot === 'WeaponA2')[0];
    const weaponB1 = characterItems?.filter(c =>c.slot === 'WeaponB1')[0];
    const weaponB2 = characterItems?.filter(c =>c.slot === 'WeaponB2')[0];

    const helmAquatic = characterItems?.filter(c =>c.slot === 'WeaponB2')[0];
    const weaponAquaticA = characterItems?.filter(c =>c.slot === 'WeaponB2')[0];
    const weaponAquaticB = characterItems?.filter(c =>c.slot === 'WeaponB2')[0];

    const sickle = characterItems?.filter(c =>c.slot === 'Sickle')[0];
    const axe = characterItems?.filter(c =>c.slot === 'Axe')[0];
    const pick = characterItems?.filter(c =>c.slot === 'Pick')[0];


    const ItemsBlock = () => {
        return (
            <div style={{display:"flex", flexDirection:"row"}}>
                <div>
                    <div>
                        {helm?.slot}: {helm?.id}
                    </div>
                    <div>
                        {shoulders?.slot}: {shoulders?.id}
                    </div>
                    <div>
                        {coat?.slot}: {coat?.id}
                    </div>
                    <div>
                        {gloves?.slot}: {gloves?.id}
                    </div>
                    <div>
                        {leggins?.slot}: {leggins?.id}
                    </div>
                    <div>
                        {boots?.slot}: {boots?.id}
                    </div>
                </div>
                <div >
                    <div>
                        {backpack?.slot}: {backpack?.id}
                    </div>
                    <div>
                        {trinket1?.slot}: {trinket1?.id}
                    </div>
                    <div>
                        {trinket2?.slot}: {trinket2?.id}
                    </div>
                    <div>
                        {amulet?.slot}: {amulet?.id}
                    </div>
                    <div>
                        {ring1?.slot}: {ring1?.id}
                    </div>
                    <div>
                        {ring2?.slot}: {ring2?.id}
                    </div>
                </div>
                <div>
                    <div>
                        {weaponA1?.slot}: {weaponA1?.id}
                    </div>
                    <div>
                        {weaponA2?.slot}: {weaponA2?.id}
                    </div>
                    <div>
                        {weaponB1?.slot}: {weaponB1?.id}
                    </div>
                    <div>
                        {weaponB2?.slot}: {weaponB2?.id}
                    </div>
                </div>
                <div >
                    <div>
                        {helmAquatic?.slot}: {helmAquatic?.id}
                    </div>
                    <div>
                        {weaponAquaticA?.slot}: {weaponAquaticA?.id}
                    </div>
                    <div>
                        {weaponAquaticB?.slot}: {weaponAquaticB?.id}
                    </div>
                </div>
                <div >
                    <div>
                        {sickle?.slot}: {sickle?.id}
                    </div>
                    <div>
                        {axe?.slot}: {axe?.id}
                    </div>
                    <div>
                        {pick?.slot}: {pick?.id}
                    </div>
                </div>
            </div>
        )
    }


    // console.log(`${helm?.slot}: ${helm?.id}`)
    // console.log(`${shoulders?.slot}: ${shoulders?.id}`)
    // console.log(`${coat?.slot}: ${coat?.id}`)
    // console.log(`${gloves?.slot}: ${gloves?.id}`)
    // console.log(`${leggins?.slot}: ${leggins?.id}`)
    // console.log(`${boots?.slot}: ${boots?.id}`)

    console.log(`${backpack?.slot}: ${backpack?.id}`)
    console.log(`${trinket1?.slot}: ${trinket1?.id}`)
    console.log(`${trinket2?.slot}: ${trinket2?.id}`)
    console.log(`${amulet?.slot}: ${amulet?.id}`)
    console.log(`${ring1?.slot}: ${ring1?.id}`)
    console.log(`${ring2?.slot}: ${ring2?.id}`)

    console.log(`${weaponA1?.slot}: ${weaponA1?.id}`)
    console.log(`${weaponA2?.slot}: ${weaponA2?.id}`)
    console.log(`${weaponB1?.slot}: ${weaponB1?.id}`)
    console.log(`${weaponB2?.slot}: ${weaponB2?.id}`)

    console.log(`${helmAquatic?.slot}: ${helmAquatic?.id}`)
    console.log(`${weaponAquaticA?.slot}: ${weaponAquaticA?.id}`)
    console.log(`${weaponAquaticB?.slot}: ${weaponAquaticB?.id}`)

    console.log(`${sickle?.slot}: ${sickle?.id}`)
    console.log(`${axe?.slot}: ${axe?.id}`)
    console.log(`${pick?.slot}: ${pick?.id}`)






const dispatch = useDispatch();
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
                <h2 style={{padding: 50}}>
                    <ItemsBlock/>
                </h2>
            </div>
            <div className={buttonStyles.buttons}>
                <Button buttonUrl={'/characters'} buttonName='Back to characters list' buttonStyle={2}/>
            </div>
        </div>

    )
}