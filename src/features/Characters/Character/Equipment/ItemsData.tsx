import {CharacterType} from "../../../../api/gw2-api";
import {useAppSelector} from "../../../../app/useAppSelector";
import React from "react";
import {ItemToRender} from "./ItemsToRender/ItemToRender";

export const ItemsData = (props: CharacterType) => {
    // const data = useAppSelector(state => state.characters.characters)


    // const character = data[props.name]
    // const equipment = character['equipment']

    // return equipment? <ItemToRender equipment={equipment}/> : <div></div>
}

export type CharactersReducedType = {
    [characterName: string]: CharacterType
}
export type EquipmentType = {
    id: number,
    slot: string,
    upgrades: [],
    infusions?: [],
    stats: {id: number, attributes: {}}
    skin: number,
    binding: string,
    bound_to: string
    statsStorage?: any
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