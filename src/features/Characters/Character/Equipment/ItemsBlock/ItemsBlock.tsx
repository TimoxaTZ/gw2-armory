import React, {useEffect} from "react";
import styles from "./ItemsBlock.module.css"
import {Grid} from "@material-ui/core";
import {EquipmentType, ItemsType} from "../ItemsData";
import {armoryApi} from "../../../../../api/gw2-api";
import {getCharactersTC} from "../../../characters-reducer";
import {getItemTC} from "./items-reducer";
import {useAppSelector} from "../../../../../app/useAppSelector";
import {useDispatch} from "react-redux";

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
                                {/*{props.items[item.slot].slot}: {props.items[item.slot].id}*/}
                                <Item itemId={props.items[item.slot].id}/>
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

    const item:ItemObjType = useAppSelector(state => state.item.item)
    console.log(item.name);

    return <div>
        {item.name}
    </div>
}

type ItemObjType = {
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



