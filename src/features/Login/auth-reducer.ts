import {Dispatch} from "redux";
import {authApi, LoginParamsType} from "../../api/gw2-api";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export const loginTC = () => async(dispatch: Dispatch) => {

}

export const logoutTC = () => async (dispatch: Dispatch) => {

}

const initialState = {
    token: 'no token'
}

const slice = createSlice({
    name: 'token',
    initialState: initialState,
    reducers: {},
    extraReducers: {}

})


export const authReducer = slice.reducer;