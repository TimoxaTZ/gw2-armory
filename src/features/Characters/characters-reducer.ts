import {Dispatch} from "redux";
import {ApiKeyType, armoryApi, CharacterType} from "../../api/gw2-api";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export const getCharactersTC = (apiKey: ApiKeyType) => async (dispatch: Dispatch) => {
    try {
        const res = await armoryApi.getCharacters(apiKey)
        if (res.data !== null) {
            dispatch(getCharactersAC({characters: res.data.data}))
        }
    }
    catch (error: any) {
        return
    }
}


const initialState: Array<CharacterType> = []

const slice = createSlice({
    name: 'characters',
    initialState: initialState,
    reducers: {
        getCharactersAC(state, action: PayloadAction<{characters: Array<CharacterType>}>) {
            return action.payload.characters
        }
    }
})

export const {getCharactersAC} = slice.actions;

export const charactersReducer = slice.reducer;