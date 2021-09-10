import {CharacterType} from "../../../../api/gw2-api";
import {useAppSelector} from "../../../../app/useAppSelector";
import React from "react";
import styles from "./ItemsBlock.module.css"
import {Grid} from "@material-ui/core";


export type CharactersReducedType = {
    [characterName: string]: CharacterType
}

export type EquipmentType = {
        id: number,
        slot: string,
        upgrades: [],
        skin: number,
        binding: string,
        bound_to: string
}

export type ItemsType = {
    [itemName: string]: {
        id: number,
        slot: string,
        infusions: [],
        binding: string,
        dyes: [],
        skin: number,
        stats: {}
        upgrades: []
    }
}

// export enum EquipmentSlots {
//     Accessory1, Accessory2,  Amulet,
//     Axe, Backpack, Boots, Coat, Gloves,
//     Helm, HelmAquatic,  Leggings,  Pick,
//     Ring1,  Ring2, Shoulders, Sickle,
//     WeaponA1,  WeaponAquaticA,  WeaponAquaticB,
//     WeaponB1,  WeaponB2,
// }


export const ItemsBlock = (props: CharacterType) => {

    const data:CharacterType[] = useAppSelector(state => state.characters.characters)
    const characters:CharactersReducedType = data.reduce((acc, character) => {
        return {
            ...acc, [character.name]: {
                ...character
            }
        };
    }, {});

    const character:any = characters[props.name]
    const equipment:EquipmentType[] = character['equipment']

    const items:ItemsType = equipment.reduce((acc, item) => {
        return {
            ...acc, [item.slot]: {
                ...item
            }
        };
    }, {});

    const getItems = equipment.map((item:any) => {
        if (items.hasOwnProperty(item.slot))
            return (
                <div className={styles.textfield}>
                        {items[item.slot].slot}: {items[item.slot].id}
                </div>
            )
    })

    return (
        <div className={styles.intro}>
            <Grid container
                  direction="row"
                  item xs zeroMinWidth
                  justifyContent="center"
                  alignItems="center">

                {getItems}

            </Grid>
        </div>

    )



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
}
