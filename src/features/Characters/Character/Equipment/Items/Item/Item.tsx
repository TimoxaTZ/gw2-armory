import {ItemRender} from "./ItemRender/ItemRender";
import React from "react";
import {ItemType} from "../../../../../../app/app-types";

export const Item = (props: { item: ItemType }) => {

    const currentItem = props.item
    // console.log('Current item: ')
    // console.log(currentItem)

    if (currentItem) {

        let itemsTypeTooltip = currentItem.statsStorage.details.type ? currentItem.statsStorage.details.type : currentItem.statsStorage.type
        let defenseTooltip = currentItem.statsStorage.type === 'Armor' ? 'Defense: ' + currentItem.statsStorage.details.defense : null;


        return <ItemRender itemIcon={currentItem.statsStorage.icon}
                           itemName={currentItem.statsStorage.name}
                           defenseTooltip={defenseTooltip}
                           itemTypeTooltip={itemsTypeTooltip}
                           itemRarity={currentItem.statsStorage.rarity}
                           itemWeightClass={currentItem.statsStorage.details.weight_class}

        />

    }
    return <div>
        Loading...
    </div>

}