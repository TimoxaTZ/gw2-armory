import {armoryApi} from "../../api/gw2-api";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CharactersReducedType, CharacterType, EquipmentType, ErrorType, StatusType} from "../../app/app-types";




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



