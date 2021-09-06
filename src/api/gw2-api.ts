import axios from "axios";

const instance = axios.create({
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
        return await instance.post<ResponseType<{userId?: number}>>('auth/login', data)
    },

    async logout(){
        return await instance.delete<ResponseType<{userId?: number}>>('auth/login')
    },

    async me(){
        return await instance.get<ResponseType<{id: number, email: string, login: string}>>('auth/me')
    }
}

export type ResponseType<D = {}> = {
    resultCode: number,
    messages: string,
    data: D
}

//GW2 Api

const instanceArmory = axios.create({
    baseURL: "https://api.guildwars2.com/v2/",
    // withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': "*"
        // "Access-Control-Allow-Origin": "*"
    //     "API-KEY": "d0c77b6f-d8e9-4ded-8d84-4e0164eb57c1"
    }
})

export const armoryApi = {
    async getCharacters(apiKey: string) {
        return await instanceArmory.get<CharactersResponseType>('characters/?access_token='+apiKey)
    }
}

export type CharacterType = string;

export type CharactersResponseType = Array<CharacterType>;

