import React, {useEffect} from "react";
import styles from "./ItemsBlock.module.css"
import {Grid} from "@material-ui/core";
import {EquipmentType} from "../ItemsData";
import {getItemTC} from "./items-reducer";
import {useAppSelector} from "../../../../../app/useAppSelector";
import {useDispatch} from "react-redux";

export const ItemsBlock = (props: {equipment: EquipmentType[]}) => {

    // props.equipment.forEach(item => {
    //     // dispatch(getItemTC(item.id))
    //     console.log(item.slot +': '+item.id)
    // })
    // console.log(props.equipment)

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
                                {`${item.slot}: ${item.id}`}
                                {/*<Item itemId={item.id}/>*/}
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


    // useCallback(dispatch(getItemTC(props.itemId)), [dispatch])

    const item:ItemType = useAppSelector(state => state.item.item)
    // console.log(item.name);

    return <div>
        {item.name}
    </div>
}

type ItemType = {
    name: string,
    // slotType: string,
    level: number,
    rarity: string,
    vendor_value: number,
    default_skin: number,
    game_types:  [],
    flags:  [],
    restrictions: [],
    id: number,
    chat_link: string,
    icon: string,
    details: {}
}



