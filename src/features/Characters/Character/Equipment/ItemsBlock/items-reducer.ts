import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {armoryApi} from '../../../../../api/gw2-api';
import {GetItemType, ItemType} from "../../../../../api/gw2-api";
import {StatsType} from "./ItemsBlock";
import {useAppSelector} from "../../../../../app/useAppSelector";


//createAsyncThunk<что принимает, тип принимаемого, тип ошибки>("уникальный_строковый_ид_санки", async(параметры) => { const res = await apiFunc(параметры)
export const getItemTC = createAsyncThunk<ItemType, {id: number, stats: StatsType}, ErrorType>('item-get', async (params)=> {
    const res = await armoryApi.getItem(params.id)
    res.data.stats = params.stats;
    return res.data
    // WORKS FINE. TESTED.
})

// const initialState = {item: {} as ItemType}

const initialState:ItemsType = {
    [0]: {status: "loading", stats: {attributes: {}, id: 0}} as ItemType
}

const slice = createSlice({
    name: 'item',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {builder
        .addCase(getItemTC.fulfilled, (state, action) => {
            state[action.payload.id] = action.payload;
            state[action.payload.id].status = 'succeed'
        })
    }
})

export const itemsReducer = slice.reducer;

export type ErrorType = {
    rejectValue: {
        error?: string,
        text?: string
    }
}

export type ItemsType = {
    [id:number]: ItemType
}


export type StatusType = 'loading' | 'succeed' | 'failed'