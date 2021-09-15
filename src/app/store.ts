import {combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {charactersReducer} from "../features/Characters/characters-reducer";
import {tokenReducer} from "../features/Token/token-reducer";
import {characterReducer} from "../features/Characters/Character/character-reducer";
import {itemsReducer} from "../features/Characters/Character/Equipment/ItemsToRender/items-reducer";


const rootReducer = combineReducers({
    token: tokenReducer,
    characters: charactersReducer,
    character: characterReducer,
    item: itemsReducer
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

//types

export type AppStateType = ReturnType<typeof rootReducer>;