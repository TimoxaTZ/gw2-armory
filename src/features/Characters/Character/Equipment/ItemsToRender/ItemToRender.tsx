import React, {useEffect, useState} from "react";
import styles from "./ItemsBlock.module.css"
import {Grid} from "@material-ui/core";
import {CharactersReducedType, EquipmentType} from "../ItemsData";
import {getItemTC, ItemsType} from "./items-reducer";
import {useAppSelector} from "../../../../../app/useAppSelector";
import {useDispatch} from "react-redux";
import {ItemRender} from "./ItemRender/ItemRender";
import {ItemType} from "../../../../../api/gw2-api";



export const ItemToRender = (props: {equipment: EquipmentType[]}) => {

    console.log(props.equipment)

    return (
        <div className={styles.intro}>
            <Grid container
                  direction="row"
                  item xs zeroMinWidth
                  justifyContent="center"
                  alignItems="center">

                {props.equipment.map((item: any) => {
                    console.log(item)
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

    // const items: ItemsType = useAppSelector(state => state.item)
    const currentItem = props.item
    console.log('Current item: ')
    console.log(currentItem)

    if (currentItem) {

        let itemsTypeTooltip = currentItem.statsStorage.details.type ? currentItem.statsStorage.details.type : currentItem.statsStorage.type
        let defenseTooltip = currentItem.statsStorage.type === 'Armor' ? 'Defense: ' + currentItem.statsStorage.details.defense : null;
        // let stats = currentItem.stats?.attributes;

        // let statsOfItem;
        // if (stats) {
        //     for (const [key, value] of Object.entries(stats)) {
        //         console.log(currentItem.name + " stats: " + `${key}: ${value}`);
        //         statsOfItem = `${key}: ${value}`;
        //
        //     }
        // }

        return <ItemRender itemIcon={currentItem.statsStorage.icon}
                           itemName={currentItem.statsStorage.name}
                           defenseTooltip={defenseTooltip}
                           itemTypeTooltip={itemsTypeTooltip}
                           itemRarity={currentItem.statsStorage.rarity}
                           itemWeightClass={currentItem.statsStorage.details.weight_class}
                           // itemStats={stats}
        // statsOfItem={statsOfItem}
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



