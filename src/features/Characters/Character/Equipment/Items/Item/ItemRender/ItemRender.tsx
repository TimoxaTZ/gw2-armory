import React, {FC} from "react";
import styles from './ItemRender.module.css'

type OwnPropertyType = {
    itemIcon: string,
    itemName: string,
    defenseTooltip: string | null,
    itemTypeTooltip: string,
    itemRarity: string,
    itemWeightClass?: string,
    itemStats?: {
        [key: string]: number
    }
}

export const ItemRender:FC<OwnPropertyType> = (props) => {


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
            <div className={styles.statsBlock}>
                {props.itemStats && Object.keys(props.itemStats).map(stat =>
                    <div>{stat} : {props.itemStats && props.itemStats[stat]}</div>)}
            </div>
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

