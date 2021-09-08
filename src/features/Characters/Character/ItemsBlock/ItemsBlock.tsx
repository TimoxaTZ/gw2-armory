import {CharacterType} from "../../../../api/gw2-api";
import {useAppSelector} from "../../../../app/useAppSelector";
import React from "react";
import styles from "./ItemsBlock.module.css"
import {Grid} from "@material-ui/core";

export const ItemsBlock = (props: CharacterType) => {

    const characterItems = useAppSelector(state => state.characters.characters.filter(c => c.name === props.name).map(currentCharacter => currentCharacter.equipment)[0])

    const helm = characterItems?.filter(c => c.slot === 'Helm')[0];
    const shoulders = characterItems?.filter(c => c.slot === 'Shoulders')[0];
    const coat = characterItems?.filter(c => c.slot === 'Coat')[0];
    const gloves = characterItems?.filter(c => c.slot === 'Gloves')[0];
    const leggins = characterItems?.filter(c => c.slot === 'Leggings')[0];
    const boots = characterItems?.filter(c => c.slot === 'Boots')[0];

    const backpack = characterItems?.filter(c => c.slot === 'Backpack')[0];
    const trinket1 = characterItems?.filter(c => c.slot === 'Accessory1')[0];
    const trinket2 = characterItems?.filter(c => c.slot === 'Accessory2')[0];
    const amulet = characterItems?.filter(c => c.slot === 'Amulet')[0];
    const ring1 = characterItems?.filter(c => c.slot === 'Ring1')[0];
    const ring2 = characterItems?.filter(c => c.slot === 'Ring2')[0];


    const weaponA1 = characterItems?.filter(c => c.slot === 'WeaponA1')[0];
    const weaponA2 = characterItems?.filter(c => c.slot === 'WeaponA2')[0];
    const weaponB1 = characterItems?.filter(c => c.slot === 'WeaponB1')[0];
    const weaponB2 = characterItems?.filter(c => c.slot === 'WeaponB2')[0];

    const helmAquatic = characterItems?.filter(c => c.slot === 'HelmAquatic')[0];
    const weaponAquaticA = characterItems?.filter(c => c.slot === 'WeaponAquaticA')[0];
    const weaponAquaticB = characterItems?.filter(c => c.slot === 'WeaponAquaticB')[0];

    const sickle = characterItems?.filter(c => c.slot === 'Sickle')[0];
    const axe = characterItems?.filter(c => c.slot === 'Axe')[0];
    const pick = characterItems?.filter(c => c.slot === 'Pick')[0];

    const equipment = {helm, shoulders, coat, gloves, leggins, boots, backpack, trinket1, trinket2, amulet, ring1, ring2, weaponA1, weaponA2, weaponB1, weaponB2, helmAquatic, weaponAquaticA, weaponAquaticB, sickle, axe, pick}
    console.log(equipment)

    return (
        <div className={styles.intro}>

            <Grid container
                  direction="row"
                  item xs zeroMinWidth
                  justifyContent="center"
                  alignItems="center">
                    <div >
                    {helm && shoulders && coat && gloves && leggins && boots !== undefined ?  <div className={styles.textfield}>
                        {helm !== undefined ? <div className={styles.textfield}>
                            {helm?.slot} {helm?.id}
                        </div> : null }
                        {shoulders !== undefined ? <div className={styles.textfield}>
                            {shoulders?.slot} {shoulders?.id}
                        </div> : null }
                        {coat !== undefined ? <div className={styles.textfield}>
                            {coat?.slot} {coat?.id}
                        </div> : null }
                        {gloves !== undefined ? <div className={styles.textfield}>
                            {gloves?.slot} {gloves?.id}
                        </div> : null }
                        {leggins !== undefined ? <div className={styles.textfield}>
                            {leggins?.slot} {leggins?.id}
                        </div> : null }
                        {boots !== undefined ? <div className={styles.textfield}>
                            {boots?.slot} {boots?.id}
                        </div> : null }
                    </div> : null}
                    {backpack && trinket1 && trinket2 && amulet && ring1 && ring2 !== undefined ? <div className={styles.textfield}>
                        {backpack !== undefined ? <div className={styles.textfield}>
                            {backpack?.slot} {backpack?.id}
                        </div> : null }
                        {trinket1 !== undefined ? <div className={styles.textfield}>
                            {trinket1?.slot} {trinket1?.id}
                        </div> : null }
                        {trinket2 !== undefined ? <div className={styles.textfield}>
                            {trinket2?.slot} {trinket2?.id}
                        </div> : null }
                        {amulet !== undefined ? <div className={styles.textfield}>
                            {amulet?.slot} {amulet?.id}
                        </div> : null }
                        {ring1 !== undefined ? <div className={styles.textfield}>
                            {ring1?.slot} {ring1?.id}
                        </div> : null }
                        {ring2 !== undefined ? <div className={styles.textfield}>
                            {ring2?.slot} {ring2?.id}
                        </div> : null }
                    </div> : null}
                     <div className={styles.textfield}>
                        {weaponA1 !==undefined ? <div className={styles.textfield}>
                            {weaponA1?.slot} {weaponA1?.id}
                        </div> : null}
                        {weaponA2 !==undefined ? <div className={styles.textfield}>
                            {weaponA2?.slot} {weaponA2?.id}
                        </div> : null}

                        {weaponB1 !==undefined ? <div className={styles.textfield}>
                            {weaponB1?.slot} {weaponB1?.id}
                        </div> : null}

                        {weaponB2 !==undefined ? <div className={styles.textfield}>
                            {weaponB2?.slot} {weaponB2?.id}
                        </div> : null}
                    </div>
                    {helmAquatic && weaponAquaticA && weaponAquaticB !== undefined ? <div className={styles.textfield}>
                        {helmAquatic !== undefined ? <div className={styles.textfield}>
                            {helmAquatic?.slot} {helmAquatic?.id}
                        </div> : null}
                        {weaponAquaticA !== undefined ? <div className={styles.textfield}>
                            {weaponAquaticA?.slot} {weaponAquaticA?.id}
                        </div> : null}
                        {weaponAquaticB !== undefined ? <div className={styles.textfield}>
                            {weaponAquaticB?.slot} {weaponAquaticB?.id}
                        </div> : null}
                    </div> : null}
                    {sickle && axe && pick !== undefined ? <div className={styles.textfield}>
                        {sickle !==undefined ? <div className={styles.textfield}>
                            {sickle?.slot} {sickle?.id}
                        </div>: null}
                        {axe !== undefined ? <div className={styles.textfield}>
                            {axe?.slot} {axe?.id}
                        </div>: null}
                        {pick !== undefined ? <div className={styles.textfield}>
                            {pick?.slot} {pick?.id}
                        </div> : null}
                    </div> : null}
                    </div>
            </Grid>
        </div>
    )
}

// {helm && shoulders && coat && gloves && leggins && boots
// && backpack && trinket1 && trinket2 && amulet && ring1 && ring2
// && weaponA1 && weaponA2 && weaponB1 && weaponB2
// && helmAquatic && weaponAquaticA && weaponAquaticB
// && sickle && axe && pick !== undefined? <DIV> : <div className={styles.textfield}>CHARACTER HAS NO ITEMS!</div> }