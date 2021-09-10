import {CharacterType} from "../../../../api/gw2-api";
import {useAppSelector} from "../../../../app/useAppSelector";
import React from "react";
import styles from "./ItemsBlock.module.css"
import {Grid} from "@material-ui/core";


export const ItemsBlock = (props: CharacterType) => {

    const data:CharacterType[] = useAppSelector(state => state.characters.characters)
    const characters:any = data.reduce((acc, character) => {
        return {
            ...acc, [character.name]: {
                ...character
            }
        };
    }, {});

    type CharacterType = typeof character;
    type EquipmnetType = typeof equipment;
    type ItemsType = typeof equipment;

    const character:any = characters[props.name]
    const equipment = character['equipment']
    const items = equipment.reduce((acc:any, item:any) => {
        return {
            ...acc, [item.slot]: {
                ...item
            }
        };
    }, {});

    const getItems = equipment.map((item:any) => {
        if (items.hasOwnProperty(item.slot))
            return (
                <div className={styles.textfield}>
                        {items[item.slot].slot}: {items[item.slot].id}
                </div>
            )
    })

    return (
        <div className={styles.intro}>
            <Grid container
                  direction="row"
                  item xs zeroMinWidth
                  justifyContent="center"
                  alignItems="center">

                {getItems}

            </Grid>
        </div>

    )



    // const getItem = (item: string) => {
    //    if (items.hasOwnProperty(item)) {
    //        console.log(`${items[item].slot}: ${items[item].id}`)
    //        return(
    //            <div>
    //                <div>
    //                    {items[item].slot}: {items[item].id}
    //                </div>
    //            </div>
    //        )
    //    }
    // }
}
