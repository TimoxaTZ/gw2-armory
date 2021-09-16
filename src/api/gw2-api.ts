import {instance} from "./instance";
import {AccountType, CharacterType, ItemType, StatsType} from "../app/app-types";


//GW2 Api

export const armoryApi = {
    async getAccountName(token: string) {
      return await instance.get<AccountType>(`v2/account?access_token=${token}`)
    },
    async getCharacters(apiKey: string) {
        return await instance.get<CharacterType[]>('v2/characters?ids=all&access_token='+apiKey)
    },
    async getItem(params: number, stats?: StatsType) {
           return await instance.get<ItemType>(`v2/items/${params}`)
    }
}

