import {armoryApi, CharactersReducedType, CharacterType, EquipmentType, ErrorType, StatusType} from "../../api/gw2-api";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

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



