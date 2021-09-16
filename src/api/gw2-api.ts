import {instance} from "./instance";
import {StatsType} from "../features/Characters/Character/Equipment/ItemsToRender/ItemToRender";
import {EquipmentType} from "../features/Characters/characters-reducer";


//GW2 Api

export const armoryApi = {
    async getAccountName(token: string) {
      return await instance.get<AccountType>(`v2/account?access_token=${token}`)
    },
    async getCharacters(apiKey: string) {
        return await instance.get<CharacterType[]>('v2/characters?ids=all&access_token='+apiKey)
    },
    async getCharacter(params:GetCharacterType) {
        return await instance.get<CharacterType>(`v2/characters/${params.characterName}?access_token=${params.apiKey}`)
    },
    async getItem(params: number, stats?: StatsType) {
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
    "equipment":
        EquipmentType[],
    // "recipes"?: [],
    // "training"?: [],
    // "bags"?: [],
    // "equipment_pvp"?: {},
    // "specializations"?: {},
    // "skills"?: {}
};

export type ItemType = {
    binding: string
    bound_to: string
    id: number
    skin: number
    slot: string
    statsStorage: {
        name: string,
        type: string,
        level: number,
        rarity: string,
        vendor_value: number,
        default_skin: number,
        game_types: [],
        flags: [],
        restrictions: [],
        id: number,
        chat_link: string,
        icon: string,
        details: {
            attributes?: [
                {attribute: string,
                    modifier: number}
                    ]

            infusion_slots?: [
                {
                    flags: [string]
                }
            ],
            type: string,
            defense?: number,
            weight_class?: "Medium" | "Heavy" | 'Light',
            attribute_adjustment?: number,
            stat_choices?: [],
            secondary_suffix_item_id?: string
        },
        stats?: StatsType
    }
    upgrades: [24739]

    // status?: StatusType
    text?: 'no such id'
}

export type AccountType = {
    "id": string,
    "name": string,
    "age": number,
    "world": number,
    "guilds": string[],
    "guild_leader": string[],
    "created": string,
    "access": string[],
    "commander": boolean,
    "fractal_level": number,
    "daily_ap": number,
    "monthly_ap": number,
    "wvw_rank": number,
    token?: string
}

// export type CharactersResponseType = {
//     data:CharacterType []
// };

