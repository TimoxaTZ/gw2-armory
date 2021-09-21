import {ItemRender} from "./ItemRender/ItemRender";
import React, {FC} from "react";
import {ItemType} from "../../../../../../app/app-types";

type OwnPropertyType = {
    item: ItemType
}

export const Item: FC<OwnPropertyType> = ({item}) => {

    let itemsTypeTooltip = item.statsStorage.details.type ? item.statsStorage.details.type : item.statsStorage.type
    let defenseTooltip = item.statsStorage.type === 'Armor' ? 'Defense: ' + item.statsStorage.details.defense : null;
    console.log(item)


    // return item ? <ItemRender itemIcon={item.statsStorage.icon}
    //                           itemName={item.statsStorage.name}
    //                           defenseTooltip={defenseTooltip}
    //                           itemTypeTooltip={itemsTypeTooltip}
    //                           itemRarity={item.statsStorage.rarity}
    //                           itemWeightClass={item.statsStorage.details.weight_class}
    //                           itemStats={item.stats?.attributes}
    //
    //     />

    return item ? <ItemRender
            itemIcon={item.statsStorage.icon}
            itemName={item.statsStorage.name}
            defenseTooltip={defenseTooltip}
            itemTypeTooltip={itemsTypeTooltip}
            itemRarity={item.statsStorage.rarity}
            itemWeightClass={item.statsStorage.details.weight_class}
            itemStats={item.stats?.attributes}
            itemBinding={item.binding}
            requiredLevel={item.statsStorage.level}
        />

        :
        <div>
            Loading...
        </div>

}