import React from "react";
import {ItemRenderPropsType} from "../../../../../../../app/app-types";

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

