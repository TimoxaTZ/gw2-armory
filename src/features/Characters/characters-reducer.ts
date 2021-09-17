import {armoryApi} from "../../api/gw2-api";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CharactersReducedType, CharacterType, EquipmentType, ErrorType} from "../../app/app-types";


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

            const statsReducedEquip = newEquipResponse.map(async (item) => {
               try {
                   const newStats = item.stats
                   const newAttributes = newStats?.attributes

                   if (newAttributes) {
                       // console.log(newStats)
                   }
                   const oldStats = item.statsStorage as EquipmentType["statsStorage"]
                   // console.log(oldStats)

                   if (oldStats) {
                       const oldAttributes = oldStats.details.infix_upgrade.attributes
                       // console.log(oldAttributes)

                       const attributes = oldAttributes.map(stat => {
                           const attribute:OldAttributesType = stat;
                           return {[attribute.attribute]: attribute.modifier}
                       })
                       const reducedAttributes = Object.assign({}, ...attributes)
                       // console.log(reducedAttributes)
                       const reducedStats = {id: 0, attributes: reducedAttributes}
                       console.log(reducedStats)
                   }
               } catch (e) {
                   return item
               }

            })

            // console.log({...character, equipment: newEquipResponse})
            return {...character, equipment: newEquipResponse}
        })


        const response = await Promise.all(charactersPromises)


        // return response

        const characters: CharactersReducedType = response.reduce((acc, character) => {

            // Beta Characters Filter

            if (character.flags?.find(f => f === 'Beta')) {
                return {
                    ...acc,
                }
            }
                return {
                    ...acc, [character.name]: {
                        ...character
                    }
                };

            }, {});

            return characters
    }
    return {}
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


export type OldAttributesType = {
    attribute: string,
    modifier: number
}

