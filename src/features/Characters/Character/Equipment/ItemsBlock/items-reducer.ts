import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {armoryApi} from '../../../../../api/gw2-api';
import {GetItemType, ItemType} from "../../../../../api/gw2-api";


//createAsyncThunk<что принимает, тип принимаемого, тип ошибки>("уникальный_строковый_ид_санки", async(параметры) => { const res = await apiFunc(параметры)
export const getItemTC = createAsyncThunk<ItemType, number, ErrorType>('item-get', async (params)=> {
    const res = await armoryApi.getItem(params)
    return res.data
    // WORKS FINE. TESTED.
})


const initialState = {item: {} as ItemType}
// const initialState = {characters: [] as CharacterType[]}

const slice = createSlice({
    name: 'item',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {builder
        .addCase(getItemTC.fulfilled, (state, action) => {
            state.item = action.payload
        })}
})

export const itemsReducer = slice.reducer;

export type ErrorType = {
    rejectValue: {
        error?: string,
        text?: string
    }
}