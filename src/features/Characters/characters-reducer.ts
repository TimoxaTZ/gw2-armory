import {armoryApi, CharacterType} from "../../api/gw2-api";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


// export const getCharactersTC = (apiKey: string) => async (dispatch: Dispatch) => {
//
//     try {
//         const res = await armoryApi.getCharacters(apiKey)
//         if (res.data !== null) {
//             dispatch(getCharactersAC({characters: res.data}))
//         }
//     }
//     catch (error: any) {
//         return
//     }
// }


//createAsyncThunk<что ВОЗВРАЩАЕТ, что ПРИНИМАЕТ, тип ошибки>("уникальный_строковый_ид_санки", async(параметры) => { const res = await apiFunc(параметры)
export const getCharactersTC = createAsyncThunk<any, string, ErrorType>('characters-get', async (params) => {
    const res = await armoryApi.getCharacters(params)
    if (res.data) {
        const charactersPromises = res.data.map(async (character: CharacterType) => {
            const newEquip = character?.equipment?.map(async (item: EquipmentType) => {
               try {
                   const newStats = await armoryApi.getItem(item.id)
                       return {...item, statsStorage: newStats.data}
               } catch (e) {
                   return item
               }
            })
            // @ts-ignore
            const newEquipResponse = await Promise.all(newEquip)
            return {...character, equipment: newEquipResponse}
        })
        const response = await Promise.all(charactersPromises)
        // return response

        const characters: CharactersReducedType = response.reduce((acc, character) => {
                return {
                    ...acc, [character.name]: {
                        ...character
                    }
                };
            }, {});
            return characters
    }
    return {}

    // const characters: CharactersReducedType = res.data.reduce((acc, character) => {
    // //     return {
    // //         ...acc, [character.name]: {
    // //             ...character
    // //         }
    // //     };
    // // }, {});
    // // return characters
})

const initialState = {characters: {} as CharactersReducedType}

const slice = createSlice({
    name: 'characters',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getCharactersTC.fulfilled, (state, action) => {
                state.characters = action.payload
            })
    }
})

export const charactersReducer = slice.reducer;

export type ErrorType = {
    rejectValue: {
        error?: string,
        text?: string
    }
}

export type CharactersReducedType = {
    [characterName: string]: CharacterType
}

export type EquipmentType = {
    id: number,
    slot: string,
    upgrades: [],
    infusions?: [],
    stats: { id: number, attributes: {} }
    skin: number,
    binding: string,
    bound_to: string
    statsStorage?: {
        chat_link: [string],
        default_skin: number
        description: string
        details: {
            type: string,
            weight_class: 'Light' | 'Medium' | 'Heavy',
            defense: number,
            infusion_slots: number[],
            attribute_adjustment: number
            infix_upgrade: { id: number, attributes: [] }
            secondary_suffix_item_id: string
            suffix_item_id: number
        }
        flags: string[]
        game_types: string[]
        icon: string
        id: number
        level: number
        name: string
        rarity: string
        restrictions: []
        type: string
        vendor_value: number
    }
}