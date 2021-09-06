import {Dispatch} from "redux";
import {authApi, LoginParamsType} from "../../api/gw2-api";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export const loginTC = (data: LoginParamsType) => async(dispatch: Dispatch) => {
   try {
       const res = await authApi.login(data)
       if (res.data.resultCode === 0) {
           dispatch(setIsLoggedInAC({value: true}))
       } else {
           return
       }
   } catch (error: any) {
       return
   }

}

// export const login2TC = (data: LoginParamsType) => (dispatch: Dispatch) => {
//     const response = authApi.login(data)
//     if (response.)
// }

export const logoutTC = () => async (dispatch: Dispatch) => {
   try {
       const res = await authApi.logout()
       if (res.data.resultCode === 0) {
           // dispatch(setIsLoggedInAC(false)) //removed by redux-toolkit+immerjs
           dispatch(setIsLoggedInAC({value: false}))
       }
       else {
           return
       }
       dispatch(setIsLoggedInAC({value: false}))
   } catch (error: any) {
       return
   }

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