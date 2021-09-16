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
    statsStorage?: {
        chat_link: [string],
        default_skin: number
        description: string
        details: {type: string,
            weight_class: 'Light' | 'Medium' | 'Heavy',
            defense: number,
            infusion_slots: number[],
            attribute_adjustment: number
            infix_upgrade: {id: number, attributes: []}
            secondary_suffix_item_id: string
            suffix_item_id: number
        }
        flags: string[]
        game_types: string[]
        icon: string
        id: number
        level: number
        name: string
        rarity: string
        restrictions: []
        type: string
        vendor_value: number
    }
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