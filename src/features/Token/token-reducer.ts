import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {armoryApi} from "../../api/gw2-api";
import {AccountType} from "../../app/app-types";


export const setTokenTC = createAsyncThunk<AccountType, string, ErrorType>('set-account', async (params)=> {
    localStorage.setItem("token", params)
    const res = await armoryApi.getAccountName(params)
    res.data = {...res.data, token: params}
    return res.data
})

const initialState = {account: {} as AccountType}

const slice = createSlice({
    name: 'token',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(setTokenTC.fulfilled, (state, action) => {
                state.account = action.payload
            })
    }
})


export const tokenReducer = slice.reducer;

export type ErrorType = {
    rejectValue: {
        error?: string,
        text?: string
    }
}