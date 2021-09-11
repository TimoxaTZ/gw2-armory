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
    },
    async getCharacter(params:GetCharacterType) {
        return await instance.get<CharacterType>(`v2/characters/${params.characterName}?access_token=${params.apiKey}`)
    },
    async getItem(params:number) {
        return await instance.get<ItemType>(`v2/items/${params}`)
    }
}

export type GetCharacterType = {
    apiKey: string,
    characterName: string
}

export type GetItemType = {
    itemId: number
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
    "equipment"?: [
        {
            id: number,
            slot: string,
            upgrades: [],
            skin: number,
            binding: string,
            bound_to: string
        }],
    // "recipes"?: [],
    // "training"?: [],
    // "bags"?: [],
    // "equipment_pvp"?: {},
    // "specializations"?: {},
    // "skills"?: {}
};

export type ItemType = {
    name: string,
    typ: string,
    level: number,
    rarity: string,
    vendor_value: number,
    default_skin: number,
    game_types: [],
    flags: [],
    restrictions: [],
    id: number,
    chat_link: string,
    icon: string
    details: {}
}

// export type CharactersResponseType = {
//     data:CharacterType []
// };

