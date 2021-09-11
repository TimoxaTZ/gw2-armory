import React, {useEffect} from "react";
import styles from "./ItemsBlock.module.css"
import {Grid} from "@material-ui/core";
import {EquipmentType, ItemsType} from "../ItemsData";
import {armoryApi} from "../../../../../api/gw2-api";
import {getCharactersTC} from "../../../characters-reducer";
import {getItemTC} from "./items-reducer";
import {useAppSelector} from "../../../../../app/useAppSelector";

export const ItemsBlock = (props: {equipment: EquipmentType[], items: ItemsType}) => {

    return (
        <div className={styles.intro}>
            <Grid container
                  direction="row"
                  item xs zeroMinWidth
                  justifyContent="center"
                  alignItems="center">

                {props.equipment.map((item: any) => {
                    if (props.items.hasOwnProperty(item.slot))
                        return (
                            <div className={styles.textfield}>
                                {props.items[item.slot].slot}: {props.items[item.slot].id}
                            </div>
                        )
                })}
            </Grid>
        </div>

    )
}

