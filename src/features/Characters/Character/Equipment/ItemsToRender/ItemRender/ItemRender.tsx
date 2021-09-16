import React from "react";
import {StatsType} from "../ItemToRender";

export const ItemRender = (props: ItemRenderPropsType) => {

    // let stats;
    // if (props.itemStats) {
    //     for (const [key, value] of Object.entries(props.itemStats)) {
    //         console.log(props.itemName + " stats: " + `${key}: ${value}`);
    //         // let statsOfItem = `${key}: ${value}`;
    //         // stats = props.itemName + " stats: " + `${key}: ${value}`
    //
    //     }
    // }

    return <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        justifyContent: "space-around",
        fontSize: 15
    }}>

        <div style={{marginRight: 10}}>
            <div>
                <img src={props.itemIcon}></img>
            </div>
        </div>

        <div>
            <div>
                {props.itemName}
            </div>
            <div>
                {props.defenseTooltip}
            </div>
            <div>
                {/*{props.statsOfItem}*/}
                {/*{stats}*/}
            </div>
        </div>

        <div>

        </div>

        <div style={{marginLeft: 20}}>
            <div>
                {props.itemRarity}
            </div>
            <div>
                {props.itemWeightClass}
            </div>
            <div>
                {props.itemTypeTooltip}
            </div>

        </div>

    </div>
}
export type ItemRenderPropsType = {
    itemIcon: string,
    itemName: string,
    defenseTooltip: string | null,
    itemTypeTooltip: string,
    itemRarity: string,
    itemWeightClass?: string,
    itemStats?: AttributesType | undefined
    statsOfItem?: string
    // itemId: number,
}

export type AttributesType = {
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