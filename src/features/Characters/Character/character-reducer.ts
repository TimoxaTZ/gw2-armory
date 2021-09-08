
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {armoryApi, CharacterType, GetCharacterType} from "../../../api/gw2-api";
import {getCharactersTC} from "../characters-reducer";


//createAsyncThunk<что принимает, тип принимаемого, тип ошибки>("уникальный_строковый_ид_санки", async(параметры) => { const res = await apiFunc(параметры)
export const getCharacterTC = createAsyncThunk<CharacterType, GetCharacterType, ErrorType>('character-get', async (params)=> {
    const res = await armoryApi.getCharacter(params)
    return res.data
    // WORKS FINE. TESTED.
})

const initialState = {character: {} as CharacterType}
// const initialState = {characters: [] as CharacterType[]}

const slice = createSlice({
    name: 'character',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {builder
        .addCase(getCharacterTC.fulfilled, (state, action) => {
            state.character = action.payload
        })}
})

export const characterReducer = slice.reducer;

export type ErrorType = {
    rejectValue: {
        error?: string,
        text?: string
    }
}