import React, {useEffect} from "react";
import styles from "./ItemsBlock.module.css"
import {Grid} from "@material-ui/core";
import {EquipmentType} from "../ItemsData";
import {getItemTC, ItemsType} from "./items-reducer";
import {useAppSelector} from "../../../../../app/useAppSelector";
import {useDispatch} from "react-redux";
import {ItemRender} from "./ItemRender/ItemRender";


export const ItemToRender = (props: { equipment: EquipmentType[] }) => {

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
                            <Item itemId={item.id} stats={item.stats}/>
                        </div>
                    )
                })}

            </Grid>
        </div>
    )
}


export const Item = (props: { itemId: number, stats: StatsType }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getItemTC({id: props.itemId, stats: props.stats}))
    }, [dispatch])

    const items: ItemsType = useAppSelector(state => state.item)
    const currentItem = items[props.itemId]


    if (currentItem && currentItem.status === 'succeed') {

        let itemsTypeTooltip = currentItem.details.type ? currentItem.details.type : currentItem.type
        let defenseTooltip = currentItem.type === 'Armor' ? 'Defense: ' + currentItem.details.defense : null;

        // if (currentItem.stats?.attributes) {
        //     for (const [key, value] of Object.entries(currentItem.stats?.attributes)) {
        //         console.log(`${key}: ${value}`);
        //         // let statsOfItem = `${key}: ${value}`;
        //
        //     }
        // }

        // if (stats) {
        //     let keys = Object.keys(stats)
        //     let values = Object.values(stats)
        //     {keys.map(k => {
        //         // values.map(v => console.log (k + ": " + v))
        //         values.map(v => {
        //             return (
        //                 <div>
        //                     {k}: {v}
        //                 </div>
        //             )
        //         })
        //     })}
        // }


        return <ItemRender itemIcon={currentItem.icon}
                           itemName={currentItem.name}
                           defenseTooltip={defenseTooltip}
                           itemTypeTooltip={itemsTypeTooltip}
                           itemRarity={currentItem.rarity}
                           itemWeightClass={currentItem.details.weight_class}/>

    }
    return <div>
        Loading...
    </div>

}

export type StatsType = {
    id: number,
    attributes: {
        Power?: number,
        Precision?: number,
        CritDamage?: number,
        AgonyResistance?: number,
        BoonDuration?: number,
        ConditionDamage?: number,
        ConditionDuration?: number,
        Healing?: number,
        Toughness?: number,
        Vitality?: number,
    }
}



