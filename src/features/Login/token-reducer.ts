import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AccountType, armoryApi, CharacterType} from "../../api/gw2-api";
import {ErrorType} from "../Characters/Character/character-reducer";
import {getCharactersTC} from "../Characters/characters-reducer";
import {EquipmentType} from "../Characters/Character/Equipment/ItemsData";



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
