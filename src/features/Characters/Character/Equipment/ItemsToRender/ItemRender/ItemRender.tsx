import React from "react";

export const ItemRender = (props: ItemRenderPropsType) => {

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
                {/*{statsOfItem}*/}
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
    itemWeightClass: string,
    // itemId: number,
}