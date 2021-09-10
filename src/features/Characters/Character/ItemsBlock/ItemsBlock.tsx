import {CharacterType} from "../../../../api/gw2-api";
import {useAppSelector} from "../../../../app/useAppSelector";
import React from "react";
import styles from "./ItemsBlock.module.css"
import {Grid} from "@material-ui/core";


export const ItemsBlock = (props: CharacterType) => {

    // const characterItems = useAppSelector(state => state.characters.characters.filter(c => c.name === props.name).map(currentCharacter => currentCharacter.equipment)[0])
    const data:CharacterType[] = useAppSelector(state => state.characters.characters)
    // const characterObj = data.filter(c => c.name === props.name)
    // const characterItems = characterObj.map(currentCharacter => currentCharacter.equipment)[0]
    console.log(data)

    const characters:any = data.reduce((acc, character) => {
        return {
            ...acc, [character.name]: {
                ...character
            }
        };
    }, {});


    const character = characters[props.name]
    const equipment = character['equipment']
    console.log(equipment)

    const items:any = equipment.reduce((acc:any, item:any) => {
        return {
            ...acc, [item.slot]: {
                ...item
            }
        };
    }, {});

    console.log(items)
    console.log(items['HelmAquatic'].id)



    // const items = {
    //     helm: characterItems?.filter(c => c.slot === 'Helm')[0],
    //     shoulders: characterItems?.filter(c => c.slot === 'Shoulders')[0],
    //     coat: characterItems?.filter(c => c.slot === 'Coat')[0],
    //     gloves: characterItems?.filter(c => c.slot === 'Gloves')[0],
    //     leggins: characterItems?.filter(c => c.slot === 'Leggings')[0],
    //     boots: characterItems?.filter(c => c.slot === 'Boots')[0],
    //     backpack: characterItems?.filter(c => c.slot === 'Backpack')[0],
    //     trinket1: characterItems?.filter(c => c.slot === 'Accessory1')[0],
    //     trinket2: characterItems?.filter(c => c.slot === 'Accessory2')[0],
    //     amulet: characterItems?.filter(c => c.slot === 'Amulet')[0],
    //     ring1: characterItems?.filter(c => c.slot === 'Ring1')[0],
    //     ring2: characterItems?.filter(c => c.slot === 'Ring2')[0],
    //     weaponA1: characterItems?.filter(c => c.slot === 'WeaponA1')[0],
    //     weaponA2: characterItems?.filter(c => c.slot === 'WeaponA2')[0],
    //     weaponB1: characterItems?.filter(c => c.slot === 'WeaponB1')[0],
    //     weaponB2: characterItems?.filter(c => c.slot === 'WeaponB2')[0],
    //     helmAquatic: characterItems?.filter(c => c.slot === 'HelmAquatic')[0],
    //     weaponAquaticA: characterItems?.filter(c => c.slot === 'WeaponAquaticA')[0],
    //     weaponAquaticB: characterItems?.filter(c => c.slot === 'WeaponAquaticB')[0],
    //     sickle: characterItems?.filter(c => c.slot === 'Sickle')[0],
    //     axe: characterItems?.filter(c => c.slot === 'Axe')[0],
    //     pick: characterItems?.filter(c => c.slot === 'Pick')[0]
    // }

    // const helm = characterItems?.filter(c => c.slot === 'Helm')[0];
    // const shoulders = characterItems?.filter(c => c.slot === 'Shoulders')[0];
    // const coat = characterItems?.filter(c => c.slot === 'Coat')[0];
    // const gloves = characterItems?.filter(c => c.slot === 'Gloves')[0];
    // const leggins = characterItems?.filter(c => c.slot === 'Leggings')[0];
    // const boots = characterItems?.filter(c => c.slot === 'Boots')[0];
    //
    // const backpack = characterItems?.filter(c => c.slot === 'Backpack')[0];
    // const trinket1 = characterItems?.filter(c => c.slot === 'Accessory1')[0];
    // const trinket2 = characterItems?.filter(c => c.slot === 'Accessory2')[0];
    // const amulet = characterItems?.filter(c => c.slot === 'Amulet')[0];
    // const ring1 = characterItems?.filter(c => c.slot === 'Ring1')[0];
    // const ring2 = characterItems?.filter(c => c.slot === 'Ring2')[0];
    //
    // const weaponA1 = characterItems?.filter(c => c.slot === 'WeaponA1')[0];
    // const weaponA2 = characterItems?.filter(c => c.slot === 'WeaponA2')[0];
    // const weaponB1 = characterItems?.filter(c => c.slot === 'WeaponB1')[0];
    // const weaponB2 = characterItems?.filter(c => c.slot === 'WeaponB2')[0];
    //
    // const helmAquatic = characterItems?.filter(c => c.slot === 'HelmAquatic')[0];
    // const weaponAquaticA = characterItems?.filter(c => c.slot === 'WeaponAquaticA')[0];
    // const weaponAquaticB = characterItems?.filter(c => c.slot === 'WeaponAquaticB')[0];
    //
    // const sickle = characterItems?.filter(c => c.slot === 'Sickle')[0];
    // const axe = characterItems?.filter(c => c.slot === 'Axe')[0];
    // const pick = characterItems?.filter(c => c.slot === 'Pick')[0];


    return (
        <div className={styles.intro}>

            <Grid container
                  direction="row"
                  item xs zeroMinWidth
                  justifyContent="center"
                  alignItems="center">

                {/*<div >*/}
                {/*{helm && shoulders && coat && gloves && leggins && boots && <div className={styles.textfield}>*/}
                {/*    {helm && <div className={styles.textfield}>*/}
                {/*        {helm?.slot} {helm?.id}*/}
                {/*    </div>}*/}
                {/*    {shoulders && <div className={styles.textfield}>*/}
                {/*        {shoulders?.slot} {shoulders?.id}*/}
                {/*    </div>}*/}
                {/*    {coat  && <div className={styles.textfield}>*/}
                {/*        {coat?.slot} {coat?.id}*/}
                {/*    </div>  }*/}
                {/*    {gloves && <div className={styles.textfield}>*/}
                {/*        {gloves?.slot} {gloves?.id}*/}
                {/*    </div>  }*/}
                {/*    {leggins && <div className={styles.textfield}>*/}
                {/*        {leggins?.slot} {leggins?.id}*/}
                {/*    </div>}*/}
                {/*    {boots  && <div className={styles.textfield}>*/}
                {/*        {boots?.slot} {boots?.id}*/}
                {/*    </div>}*/}
                {/*</div>}*/}
                {/*{backpack && trinket1 && trinket2 && amulet && ring1 && ring2 && <div className={styles.textfield}>*/}
                {/*    {backpack && <div className={styles.textfield}>*/}
                {/*        {backpack?.slot} {backpack?.id}*/}
                {/*    </div>}*/}
                {/*    {trinket1 &&  <div className={styles.textfield}>*/}
                {/*        {trinket1?.slot} {trinket1?.id}*/}
                {/*    </div>}*/}
                {/*    {trinket2 &&  <div className={styles.textfield}>*/}
                {/*        {trinket2?.slot} {trinket2?.id}*/}
                {/*    </div>}*/}
                {/*    {amulet &&  <div className={styles.textfield}>*/}
                {/*        {amulet?.slot} {amulet?.id}*/}
                {/*    </div>}*/}
                {/*    {ring1 &&  <div className={styles.textfield}>*/}
                {/*        {ring1?.slot} {ring1?.id}*/}
                {/*    </div>}*/}
                {/*    {ring2 &&  <div className={styles.textfield}>*/}
                {/*        {ring2?.slot} {ring2?.id}*/}
                {/*    </div>}*/}
                {/*</div>}*/}
                {/* <div className={styles.textfield}>*/}
                {/*    {weaponA1 &&  <div className={styles.textfield}>*/}
                {/*        {weaponA1?.slot} {weaponA1?.id}*/}
                {/*    </div> }*/}
                {/*    {weaponA2 &&  <div className={styles.textfield}>*/}
                {/*        {weaponA2?.slot} {weaponA2?.id}*/}
                {/*    </div>}*/}

                {/*    {weaponB1 &&  <div className={styles.textfield}>*/}
                {/*        {weaponB1?.slot} {weaponB1?.id}*/}
                {/*    </div>}*/}

                {/*    {weaponB2 &&  <div className={styles.textfield}>*/}
                {/*        {weaponB2?.slot} {weaponB2?.id}*/}
                {/*    </div>}*/}
                {/*</div>*/}
                {/*{helmAquatic && weaponAquaticA && weaponAquaticB && <div className={styles.textfield}>*/}
                {/*    {helmAquatic  &&  <div className={styles.textfield}>*/}
                {/*        {helmAquatic?.slot} {helmAquatic?.id}*/}
                {/*    </div>}*/}
                {/*    {weaponAquaticA  &&  <div className={styles.textfield}>*/}
                {/*        {weaponAquaticA?.slot} {weaponAquaticA?.id}*/}
                {/*    </div>}*/}
                {/*    {weaponAquaticB &&  <div className={styles.textfield}>*/}
                {/*        {weaponAquaticB?.slot} {weaponAquaticB?.id}*/}
                {/*    </div>}*/}
                {/*</div>}*/}
                {/*{sickle && axe && pick && <div className={styles.textfield}>*/}
                {/*    {sickle && <div className={styles.textfield}>*/}
                {/*        {sickle?.slot} {sickle?.id}*/}
                {/*    </div>}*/}
                {/*    {axe && <div className={styles.textfield}>*/}
                {/*        {axe?.slot} {axe?.id}*/}
                {/*    </div>}*/}
                {/*    {pick && <div className={styles.textfield}>*/}
                {/*        {pick?.slot} {pick?.id}*/}
                {/*    </div>}*/}
                {/*</div>}*/}
                {/*</div>*/}
            </Grid>
        </div>
    )
}

// {helm && shoulders && coat && gloves && leggins && boots
// && backpack && trinket1 && trinket2 && amulet && ring1 && ring2
// && weaponA1 && weaponA2 && weaponB1 && weaponB2
// && helmAquatic && weaponAquaticA && weaponAquaticB
// && sickle && axe && pick !== undefined? <DIV> : <div className={styles.textfield}>CHARACTER HAS NO ITEMS!</div> }