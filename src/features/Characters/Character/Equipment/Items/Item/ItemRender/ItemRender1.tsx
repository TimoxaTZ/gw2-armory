import React from "react";
import styles from './ItemRender1.module.css'
import icon from '../../../../../../../assets/images/incinerator.png'
import infusionIcon from '../../../../../../../assets/images/incinerator.png'


// type OwnPropertyType = {
//     itemIcon: string,
//     itemName: string,
//     defenseTooltip: string | null,
//     itemTypeTooltip: string,
//     itemRarity: string,
//     itemWeightClass?: string,
//     itemStats?: {
//         [key: string]: number
//     }
// }

export const ItemRender1 = () => {

    type itemRarityType = 'Legendary' | "Ascended" | "Exotic" | "Rare" | "Masterwork" | "Fine" | "Basic"
    const itemRarity: itemRarityType = "Legendary"
    // @ts-ignore
    let rarityStyle: styles.BasicBorder

    switch (itemRarity) {
        case "Legendary":
            rarityStyle = styles.LegendaryBorder
            break;
        // case "Ascended":
        //     rarityStyle = styles.AscendedBorder
        //     break;
        // case "Exotic":
        //     rarityStyle = styles.ExoticBorder
        //     break;
        // case "Rare":
        //     rarityStyle = styles.RareBorder
        //     break;
        // case "Masterwork":
        //     rarityStyle = styles.MasterworkBorder
        //     break;
        // case "Fine":
        //     rarityStyle = styles.FineBorder
        //     break;
        // case "Basic":
        //     rarityStyle = styles.BasicBorder
        //     break;
        // default: rarityStyle = ''
    }

    return <div className={styles.itemContainer}>

                    {/*ITEM ICON AND TITLE*/}
        <div className={styles.itemTitleAndIcon}>
            <div>
                <div className={styles.itemIconBorder}>
                    <img className={styles.itemIcon} src={icon}/>
                </div>
            </div>
            <div className={styles.itemInfoBlock}>
                <div className={styles.itemName}>
                    Baboon Dagger of Pink Hole Apes Infused
                </div>
                <div className={styles.itemStatsInfo}>
                    Defence: 228
                    <div className={styles.itemStatsContainer}>
                        <div>+100 Power</div>
                        <div>+50 Precision</div>
                        <div>+50 Ferocity</div>
                    </div>
                </div>
            </div>
        </div>
                  {/*INFUSIONS*/}
        <div className={styles.infusionTitleAndIcon}>
            <div>
                <div className={styles.itemIconBorder}>
                    <img className={styles.infusionIcon} src={icon}/>
                </div>
            </div>

            <div className={styles.itemInfoBlock}>
                <div className={styles.infusionName}>
                    Very Long Annoying Infusion
                </div>
                <div className={styles.itemInfusionInfo}>
                    <div className={styles.itemInfusionContainer}>
                        <div>+5 Precision</div>
                        <div>+9 Agony Resistance</div>
                    </div>
                </div>
            </div>
        </div>
                    {/*RUNES*/}
        <div className={styles.infusionTitleAndIcon}>
            <div>
                <div className={styles.itemIconBorder}>
                    <img className={styles.infusionIcon} src={icon}/>
                </div>
            </div>

            <div className={styles.itemInfoBlock}>
                <div className={styles.infusionName}>
                    Big Boss Rune Of the Pack
                </div>
                <div className={styles.itemInfusionInfo}>
                    <div className={styles.itemInfusionContainer}>
                        <div>(1) Rune set bonus one </div>
                        <div>(2) Rune set bonus two </div>
                        <div>(3) Rune set bonus three </div>
                        <div>(4) Rune set bonus four </div>
                        <div>(5) Rune set bonus five </div>
                        <div>(6) Rune set bonus full </div>
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
                        Legendary
                    </div>
                </div>
                <div className={styles.infusionName}>
                    <div>
                        Medium (for armor type)
                    </div>
                </div>
                <div className={styles.infusionName}>
                    <div>
                        Dagger
                    </div>
                </div>
                <div className={styles.infusionName}>
                    <div>
                        Required Level: 80
                    </div>
                </div>
                <div className={styles.infusionName}>
                    <div>
                        Account Bound
                    </div>
                </div>

            </div>
        </div>
    </div>
}

