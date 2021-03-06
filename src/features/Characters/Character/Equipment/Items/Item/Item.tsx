import {ItemRender} from "./ItemRender/ItemRender";
import React, {FC} from "react";
import {InfusionType, ItemType, UpgradeType} from "../../../../../../app/app-types";

type OwnPropertyType = {
    item: ItemType
}

export const Item: FC<OwnPropertyType> = ({item}) => {

    let itemsTypeTooltip = item.statsStorage.details.type ? item.statsStorage.details.type : item.statsStorage.type
    let itemDefenseTooltip = item.statsStorage.type === 'Armor' ? 'Defense: ' + item.statsStorage.details.defense : null;
    let itemBoundOn = item.bound_to ? 'Soulbound on ' + item.bound_to : 'Bound on ' + item.binding

    return item ? <ItemRender
            itemIcon={item.statsStorage.icon}
            itemName={item.statsStorage.name}
            defenseTooltip={itemDefenseTooltip}
            itemTypeTooltip={itemsTypeTooltip}
            itemRarity={item.statsStorage.rarity}
            itemWeightClass={item.statsStorage.details.weight_class}
            itemStats={item.stats?.attributes}
            itemBinding={itemBoundOn}
            requiredLevel={item.statsStorage.level}
            itemInfusions={item.infusions}
            itemUpgrades={item.upgrades}
        />

        :
        <div>
            Loading...
        </div>

}