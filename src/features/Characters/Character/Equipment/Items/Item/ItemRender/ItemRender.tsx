import React from "react";
import {ItemRenderPropsType} from "../../../../../../../app/app-types";
import styles from './ItemRender.module.css'

export const ItemRender = (props: ItemRenderPropsType) => {

    // console.log(props.itemRarity)

    // @ts-ignore
    let rarityStyle: styles.BasicBorder

    switch (props.itemRarity) {
        case "Legendary":
            rarityStyle = styles.LegendaryBorder
            break;
        case "Ascended":
            rarityStyle = styles.AscendedBorder
            break;
        case "Exotic":
            rarityStyle = styles.ExoticBorder
            break;
        case "Rare":
            rarityStyle = styles.RareBorder
            break;
        case "Masterwork":
            rarityStyle = styles.MasterworkBorder
            break;
        case "Fine":
            rarityStyle = styles.FineBorder
            break;
        case "Basic":
            rarityStyle = styles.BasicBorder
            break;
        default: rarityStyle = ''
    }


    return <div className={styles.container}>

        <div >
        {/*<div>*/}
            <div className={styles.iconBorder}>
                <img className={rarityStyle} src={props.itemIcon}></img>
            </div>
        </div>

        <div className={styles.infoBlock}>
            <div className={styles.itemName}>
                {props.itemName}
            </div>
            <div>
                {/*{props.defenseTooltip}*/}
            </div>
            <div  className={styles.statsBlock}>
                {props.itemStats?.Power && <div> {`Power: ${props.itemStats?.Power}`}</div>}
                {props.itemStats?.Precision && <div> {`Precision: ${props.itemStats?.Precision}`}</div>}
                {props.itemStats?.CritDamage && <div> {`Ferocity: ${props.itemStats?.CritDamage}`}</div>}
                {props.itemStats?.BoonDuration && <div> {`Concentration: ${props.itemStats?.BoonDuration}`}</div>}
                {props.itemStats?.ConditionDamage && <div> {`Condition Damage: ${props.itemStats?.ConditionDamage}`}</div>}
                {props.itemStats?.ConditionDuration && <div> {`Expertise: ${props.itemStats?.ConditionDuration}`}</div>}
                {props.itemStats?.Healing && <div> {`Healing Power: ${props.itemStats?.Healing}`}</div>}
                {props.itemStats?.Toughness && <div> {`Toughness: ${props.itemStats?.Toughness}`}</div>}
                {props.itemStats?.Vitality && <div> {`Vitality: ${props.itemStats?.Vitality}`}</div>}
                {/*{props.itemStats?.AgonyResistance && <div> {`Agony Resistance: ${props.itemStats?.AgonyResistance}`}</div>}*/}
            </div>
        </div>

        <div>

        </div>

        <div className={styles.itemType}>
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

