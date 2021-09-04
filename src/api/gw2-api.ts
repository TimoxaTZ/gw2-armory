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
    login(data: LoginParamsType) {
        return instance.post<ResponseType<{userId?: number}>>('auth/login', data)
    },

    logout(){
        return instance.delete<ResponseType<{userId?: number}>>('auth/login')
    },

    me(){
        return instance.get<ResponseType<{id: number, email: string, login: string}>>('auth/me')
    }
}



export type ResponseType<D = {}> = {
    resultCode: number,
    messages: string,
    data: D
}



