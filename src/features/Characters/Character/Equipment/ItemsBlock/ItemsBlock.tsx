import React, {useCallback, useEffect} from "react";
import styles from "./ItemsBlock.module.css"
import {Grid} from "@material-ui/core";
import {EquipmentType} from "../ItemsData";
import {getItemTC, ItemsType} from "./items-reducer";
import {useAppSelector} from "../../../../../app/useAppSelector";
import {useDispatch} from "react-redux";
import {ItemType} from "../../../../../api/gw2-api";


export const ItemsBlock = (props: {equipment: EquipmentType[]}) => {

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
                                <Item itemId={item.id}/>
                            </div>
                        )
                })}

            </Grid>
        </div>
    )
}


export const Item = (props: {itemId:number}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getItemTC(props.itemId))
    }, [dispatch])

    const items:ItemsType = useAppSelector(state => state.item)
    const currentItem = items[props.itemId]

    if (currentItem && currentItem.status === 'succeed') {
            return <div> {currentItem.name} </div>
    }

    return <div>
        Loading...
    </div>

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



