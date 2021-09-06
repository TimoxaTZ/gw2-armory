import {armoryApi, CharacterType} from "../../api/gw2-api";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


// export const getCharactersTC = (apiKey: string) => async (dispatch: Dispatch) => {
//
//     try {
//         const res = await armoryApi.getCharacters(apiKey)
//         if (res.data !== null) {
//             dispatch(getCharactersAC({characters: res.data}))
//         }
//     }
//     catch (error: any) {
//         return
//     }
// }

export const getCharactersTC = createAsyncThunk<Array<CharacterType>, string, ErrorType>('characters-get', async (params)=> {
    const res = await armoryApi.getCharacters(params)
        return res.data
})

const initialState = {characters: [] as CharacterType[]}

const slice = createSlice({
    name: 'characters',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {builder.addCase(getCharactersTC.fulfilled, (state, action) => {
        state.characters = action.payload
    })}
})

export const charactersReducer = slice.reducer;

export type ErrorType = {
    rejectValue: {
        error: string
    }
}