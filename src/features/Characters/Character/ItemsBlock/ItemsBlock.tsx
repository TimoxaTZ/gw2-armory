import {CharacterType} from "../../../../api/gw2-api";
import {useAppSelector} from "../../../../app/useAppSelector";
import React from "react";
import styles from "./ItemsBlock.module.css"
import {Grid} from "@material-ui/core";



export const ItemsBlock = (props: CharacterType) => {

    const data:CharacterType[] = useAppSelector(state => state.characters.characters)
    const characters:any = data.reduce((acc, character) => {
        return {
            ...acc, [character.name]: {
                ...character
            }
        };
    }, {});

    const character = characters[props.name]
    const equipment = character['equipment']

    const items:any = equipment.reduce((acc:any, item:any) => {
        return {
            ...acc, [item.slot]: {
                ...item
            }
        };
    }, {});

    // const getItem = (item: string) => {
    //    if (items.hasOwnProperty(item)) {
    //        console.log(`${items[item].slot}: ${items[item].id}`)
    //        return(
    //            <div>
    //                <div>
    //                    {items[item].slot}: {items[item].id}
    //                </div>
    //            </div>
    //        )
    //    }
    // }

    const getItems = equipment.map((item:any) => {
        if (items.hasOwnProperty(item.slot))
        return (
            <Grid container
                  direction="row"
                  item xs zeroMinWidth
                  justifyContent="center"
                  alignItems="center">
                <div>
                        <div className={styles.textfield}>
                            {items[item.slot].slot}: {items[item.slot].id}
                        </div>
                </div>
            </Grid>

        )
    })

    return (
        <div className={styles.intro}>
            {getItems}
        </div>
    )
}

// {helm && shoulders && coat && gloves && leggins && boots
// && backpack && trinket1 && trinket2 && amulet && ring1 && ring2
// && weaponA1 && weaponA2 && weaponB1 && weaponB2
// && helmAquatic && weaponAquaticA && weaponAquaticB
// && sickle && axe && pick !== undefined? <DIV> : <div className={styles.textfield}>CHARACTER HAS NO ITEMS!</div> }