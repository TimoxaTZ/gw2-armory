import axios from "axios";
import {instance} from "./instance";

const authInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true,
    headers: {
        "API-KEY": "d0c77b6f-d8e9-4ded-8d84-4e0164eb57c1"
    }
})
// Auth Api
export type LoginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: string
}

export const authApi = {
    // login(data: LoginParamsType) {
    //     return instance.post<ResponseType<{userId?: number}>>('auth/login', data)
    // },

    async login(data: LoginParamsType) {
        return await authInstance.post<ResponseType<{userId?: number}>>('auth/login', data)
    },

    async logout(){
        return await authInstance.delete<ResponseType<{userId?: number}>>('auth/login')
    },

    async me(){
        return await authInstance.get<ResponseType<{id: number, email: string, login: string}>>('auth/me')
    }
}

export type ResponseType<D = {}> = {
    resultCode: number,
    messages: string,
    data: D
}

//GW2 Api


export const armoryApi = {
    async getCharacters(apiKey: string) {
        return await instance.get<CharacterType[]>('v2/characters?ids=all&access_token='+apiKey)
    }
}

export type CharacterType = {
    "name": string,
    // "race"?: string,
    // "gender"?: string,
    // "flags"?: [],
    // "profession"?: string,
    // "level"?: 80,
    // "guild"?: string,
    // "age"?: 3395169,
    // "created"?: "2014-12-18T16:15:00Z",
    // "deaths"?: 4028,
    // "crafting"?: [],
    // "title"?: 365,
    // "backstory"?: [],
    // "wvw_abilities"?: [],
    // "equipment"?: [],
    // "recipes"?: [],
    // "training"?: [],
    // "bags"?: [],
    // "equipment_pvp"?: {},
    // "specializations"?: {},
    // "skills"?: {}
};

export type CharactersResponseType = {
    data:CharacterType []
};

