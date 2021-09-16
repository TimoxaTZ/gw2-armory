import React from "react";
import styles from "./ItemsBlock.module.css"
import {Grid} from "@material-ui/core";
import {ItemRender} from "./ItemRender/ItemRender";
import {EquipmentType, ItemType} from "../../../../../api/gw2-api";


export const ItemToRender = (props: {equipment: EquipmentType[]}) => {

    return (
        <div className={styles.intro}>
            <Grid container
                  direction="row"
                  item xs zeroMinWidth
                  justifyContent="center"
                  alignItems="center">

                {props.equipment.map((item: any) => {

                    return (
                        <div className={styles.textfield}>
                            {/*{`${item.slot}: ${item.id}`}*/}
                            <Item item={item}/>
                        </div>
                    )
                })}

            </Grid>
        </div>
    )
}


export const Item = (props: {item: ItemType}) => {

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

export type StatsType = {
    id: number,
    attributes: {
        // Power?: number,
        // Precision?: number,
        // CritDamage?: number,
        // AgonyResistance?: number,
        // BoonDuration?: number,
        // ConditionDamage?: number,
        // ConditionDuration?: number,
        // Healing?: number,
        // Toughness?: number,
        // Vitality?: number,
    }
}



