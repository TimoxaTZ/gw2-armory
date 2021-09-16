import {combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {charactersReducer} from "../features/Characters/characters-reducer";
import {tokenReducer} from "../features/Token/token-reducer";



const rootReducer = combineReducers({
    token: tokenReducer,
    characters: charactersReducer,

})

export type AppRootStateType = ReturnType<RootReducerType>
export type RootReducerType = typeof rootReducer;


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)
})

// @ts-ignore
window.store = store;


//types

export type AppStateType = ReturnType<typeof rootReducer>;