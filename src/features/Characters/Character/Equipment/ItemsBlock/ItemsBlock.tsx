import React, {useCallback, useEffect} from "react";
import styles from "./ItemsBlock.module.css"
import {Grid} from "@material-ui/core";
import {EquipmentType} from "../ItemsData";
import {getItemTC, ItemsType} from "./items-reducer";
import {useAppSelector} from "../../../../../app/useAppSelector";
import {useDispatch} from "react-redux";
import {ItemType} from "../../../../../api/gw2-api";

export const ItemsBlock = (props: {equipment: EquipmentType[]}) => {

    // const dispatch = useDispatch();
    //
    // props.equipment.forEach(item => {
    //     dispatch(getItemTC(item.id))
    //     // console.log(item.slot +': '+item.id)
    // })
    // // console.log(props.equipment)

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

    let currentItem = {name: 'Loading...'};

    const items:ItemsType = useAppSelector(state => state.item)
    if (items[props.itemId]) {
        currentItem = items[props.itemId]
    }

    return <div>
        {currentItem.name}
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



