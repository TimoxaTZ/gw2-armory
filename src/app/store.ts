import {combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import {authReducer} from "../features/Login/auth-reducer";
import {configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    auth: authReducer
})

export type AppRootStateType = ReturnType<RootReducerType>
export type RootReducerType = typeof rootReducer;
// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// Redux toolkit store configure
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)
})

// @ts-ignore
window.store = store;
