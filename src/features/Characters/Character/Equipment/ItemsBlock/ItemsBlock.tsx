import React, {useCallback, useEffect} from "react";
import styles from "./ItemsBlock.module.css"
import {Grid} from "@material-ui/core";
import {EquipmentType} from "../ItemsData";
import {getItemTC, ItemsType} from "./items-reducer";
import {useAppSelector} from "../../../../../app/useAppSelector";
import {useDispatch} from "react-redux";
import {ItemType} from "../../../../../api/gw2-api";
import {log} from "util";


export const ItemsBlock = (props: { equipment: EquipmentType[] }) => {

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
        let stats = currentItem.stats?.attributes;
        // console.log(stats)



        if (stats) {
            for (var key in stats) {
                // console.log(key + ": " + stats[key]);
            }


            // let keys = Object.keys(stats)
            // let values = Object.values(stats)
            // // keys.forEach(k => console.log(k))
            // keys.map(k => console.log(k + ": )))
        }



        return <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "space-around",
            fontSize: 15
        }}>

            <div style={{marginRight: 10}}>
                <div>
                    <img src={currentItem.icon}></img>
                </div>
            </div>

            <div>
                <div>
                    {currentItem.name}
                </div>
                <div>
                    {defenseTooltip}
                </div>
                <div>

                </div>
            </div>

            <div>

            </div>

            <div style={{marginLeft: 20}}>
                <div>
                    {currentItem.rarity}
                </div>
                <div>
                    {currentItem.details.weight_class}
                </div>
                <div>
                    {itemsTypeTooltip}
                </div>

            </div>

        </div>
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


// type ItemType1 = {
//     name: string,
//     // slotType: string,
//     level: number,
//     rarity: string,
//     vendor_value: number,
//     default_skin: number,
//     game_types:  [],
//     flags:  [],
//     restrictions: [],
//     id: number,
//     chat_link: string,
//     icon: string,
//     details: {}
// }



