import {Dispatch} from "redux";
import {authApi, LoginParamsType} from "../../api/gw2-api";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
    authApi.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC({value: true}))
            } else {
            }
        }).catch((error) => {
    })

}

// export const login2TC = (data: LoginParamsType) => (dispatch: Dispatch) => {
//     const response = authApi.login(data)
//     if (response.)
// }

export const logoutTC = () => (dispatch: Dispatch) => {
    authApi.logout().then(res => {
            dispatch(setIsLoggedInAC({value: false}))
    }).catch((error) => {
        return
    })
}

const initialState = {
    isLoggedIn: false
}

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setIsLoggedInAC(state, action: PayloadAction<{value: boolean}>) {
            state.isLoggedIn = action.payload.value
        }
    }
})

export const {setIsLoggedInAC} = slice.actions;

export const authReducer = slice.reducer;