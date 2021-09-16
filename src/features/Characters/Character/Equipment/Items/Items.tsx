import React from "react";
import styles from "./Items.module.css"
import {Grid} from "@material-ui/core";
import {Item} from "./Item/Item";
import {EquipmentType} from "../../../../../app/app-types";


export const Items = (props: {equipment: EquipmentType[]}) => {

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
                            <Item item={item}/>
                        </div>
                    )
                })}

            </Grid>
        </div>
    )
}



