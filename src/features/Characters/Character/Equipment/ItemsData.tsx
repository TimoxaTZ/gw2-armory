import {CharacterType} from "../../../../api/gw2-api";
import {useAppSelector} from "../../../../app/useAppSelector";
import React from "react";
import {ItemsBlock} from "./ItemsBlock/ItemsBlock";

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

    // const items: ItemsType = equipment.reduce((acc, item) => {
    //     return {
    //         ...acc, [item.slot]: {
    //             ...item
    //         }
    //     };
    // }, {});

    return <ItemsBlock equipment={equipment}/>
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
// export type ItemsType = {
//     [itemName: string]: {
//         id: number,
//         slot: string,
//         infusions: [],
//         binding: string,
//         dyes: [],
//         skin: number,
//         stats: {}
//         upgrades: []
//     }
// }