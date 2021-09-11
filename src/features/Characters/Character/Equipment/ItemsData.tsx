import {CharacterType} from "../../../../api/gw2-api";
import {useAppSelector} from "../../../../app/useAppSelector";
import React, {useEffect} from "react";
import {ItemsBlock} from "./ItemsBlock/ItemsBlock";
import {getItemTC} from "./ItemsBlock/items-reducer";
import {useDispatch} from "react-redux";
import styles from "./ItemsBlock/ItemsBlock.module.css";
import {Grid} from "@material-ui/core";

export const ItemsData = (props: CharacterType) => {
    const data: CharacterType[] = useAppSelector(state => state.characters.characters)
    const characters: CharactersReducedType = data.reduce((acc, character) => {
        return {
            ...acc, [character.name]: {
                ...character
            }
        };
    }, {});

    const character: any = characters[props.name]
    const equipment: EquipmentType[] = character['equipment']
    const items: ItemsType = equipment.reduce((acc, item) => {
        return {
            ...acc, [item.slot]: {
                ...item
            }
        };
    }, {});

    let itemId: number;
    equipment.map((item: any) => {
        if (items.hasOwnProperty(item.slot))
            return itemId = items[item.slot].id

    })

    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getItemTC(itemId))
    }, [dispatch])



    const item = useAppSelector(state => state.item.item)
    console.log(item);


    return <ItemsBlock equipment={equipment}
                       items={items}/>

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

    // export enum EquipmentSlots {
    //     Accessory1, Accessory2, Amulet,
    //     Axe, Backpack, Boots, Coat, Gloves,
    //     Helm, HelmAquatic, Leggings, Pick,
    //     Ring1, Ring2, Shoulders, Sickle,
    //     WeaponA1, WeaponAquaticA, WeaponAquaticB,
    //     WeaponB1, WeaponB2,
    // }

//
// export type Slots = 'Acessory1' | 'Accessory2' | 'Amulet'
//                     | 'Axe' | 'Backpack' | 'Boots' | 'Coat'
//                     | 'Gloves' | 'Helm' | 'HelmAquatic' | 'Leggins'
//                     | 'Pick' | 'Ring1' | 'Ring2' | 'Shoulders'
//                     | 'Sickle'| 'WeaponA1' | 'WeaponA2' | 'WeaponB1'
//                     |'WeaponB2' | 'WeaponAquaticA' | 'WeaponAquaticB'
}

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