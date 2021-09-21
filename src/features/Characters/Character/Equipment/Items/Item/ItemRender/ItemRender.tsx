import React, {FC} from "react";
import styles from './ItemRender.module.css'
import {InfusionType} from "../../../../../../../app/app-types";


type OwnPropertyType = {
    itemIcon: string,
    itemName: string,
    defenseTooltip: string | null,
    itemTypeTooltip: string,
    itemRarity: string,
    itemWeightClass?: string,
    itemBinding: string,
    itemStats?: {
        [key: string]: number
    }
    requiredLevel?: number
    itemInfusions?: {[key:string]: InfusionType}
}

export const ItemRender: FC<OwnPropertyType> = (props)  => {

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


    return <div className={styles.itemContainer}>

                    {/*ITEM ICON AND TITLE*/}
        <div className={styles.itemTitleAndIcon}>
            <div>
                <div className={styles.itemIconBorder}>
                    <img className={rarityStyle} src={props.itemIcon}/>
                </div>
            </div>
            <div className={styles.itemInfoBlock}>
                <div className={styles.itemName}>
                    {props.itemName}
                </div>
                <div className={styles.itemStatsInfo}>
                    {props.defenseTooltip}
                    <div className={styles.itemStatsContainer}>
                        {props.itemStats && Object.keys(props.itemStats).map(stat =>
                            <div>{stat} : {props.itemStats && props.itemStats[stat]}</div>)}
                    </div>
                </div>
            </div>
        </div>
                  {/*INFUSIONS*/}
            {props.itemInfusions && Object.keys(props.itemInfusions).map(infusion => {

                return (
                    <div className={styles.infusionTitleAndIcon}>
                    <div>
                        <div className={styles.itemIconBorder}>
                            <img className={styles.infusionIcon} src={props.itemInfusions && props.itemInfusions[infusion].icon}/>
                        </div>
                    </div>

                    <div className={styles.itemInfoBlock}>
                        <div className={styles.infusionName}>
                            {props.itemInfusions && props.itemInfusions[infusion].name}
                        </div>
                        <div className={styles.itemInfusionInfo}>
                            <div className={styles.itemInfusionContainer}>
                                {props.itemInfusions && props.itemInfusions[infusion].details.infix_upgrade.buff.description}
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}


        {/*<div className={styles.infusionTitleAndIcon}>*/}
        {/*    <div>*/}
        {/*        <div className={styles.itemIconBorder}>*/}
        {/*            /!*<img className={styles.infusionIcon} src={icon}/>*!/*/}
        {/*        </div>*/}
        {/*    </div>*/}

        {/*    <div className={styles.itemInfoBlock}>*/}
        {/*        <div className={styles.infusionName}>*/}
        {/*            /!*Very Long Annoying Infusion*!/*/}
        {/*        </div>*/}
        {/*        <div className={styles.itemInfusionInfo}>*/}
        {/*            <div className={styles.itemInfusionContainer}>*/}
        {/*                /!*<div>+5 Precision</div>*!/*/}
        {/*                /!*<div>+9 Agony Resistance</div>*!/*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
                    {/*RUNES*/}
        <div className={styles.infusionTitleAndIcon}>
            <div>
                <div className={styles.itemIconBorder}>
                    {/*<img className={styles.infusionIcon} src={icon}/>*/}
                </div>
            </div>

            <div className={styles.itemInfoBlock}>
                <div className={styles.infusionName}>
                    {/*Big Boss Rune Of the Pack*/}
                </div>
                <div className={styles.itemInfusionInfo}>
                    <div className={styles.itemInfusionContainer}>
                        {/*<div>(1) Rune set bonus one </div>*/}
                        {/*<div>(2) Rune set bonus two </div>*/}
                        {/*<div>(3) Rune set bonus three </div>*/}
                        {/*<div>(4) Rune set bonus four </div>*/}
                        {/*<div>(5) Rune set bonus five </div>*/}
                        {/*<div>(6) Rune set bonus full </div>*/}
                    </div>
                </div>
            </div>
        </div>

                       {/*TRANSMUTE*/}

        <div className={styles.itemInfoBlock}>
            <div className={styles.infusionName}>
                <div>
                    Transmuted
                </div>
            </div>
            <div className={styles.itemInfusionInfo}>
                <div className={styles.itemInfusionContainer}>
                    <div>Transmute Skin Name</div>
                </div>
            </div>
        </div>

                            {/*ARMOR TYPE, RARITY, BOUND, LEVEL REQ*/}
        <div className={styles.itemInfoBlock}>
            <div className={styles.itemInfoBlock}>
                <div className={styles.infusionName}>
                    <div>
                        {props.itemRarity}
                    </div>
                </div>
                <div className={styles.infusionName}>
                    <div>
                        {props.itemWeightClass}
                    </div>
                </div>
                <div className={styles.infusionName}>
                    <div>
                        {props.itemTypeTooltip}
                    </div>
                </div>
                <div className={styles.infusionName}>
                    {props.requiredLevel !== 0 && <div>Required Level: {props.requiredLevel}</div>}
                </div>
                <div className={styles.infusionName}>
                    <div>{props.itemBinding}</div>
                </div>

            </div>
        </div>
    </div>
}

