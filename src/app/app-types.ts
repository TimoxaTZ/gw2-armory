export type StatsType = {
    id: number,
    attributes: {}
}

export type ErrorType = {
    rejectValue: {
        error?: string,
        text?: string
    }
}
export type CharactersReducedType = {
    [characterId: string]: CharacterType
}
export type EquipmentType = {
    id: number,
    slot: string,
    upgrades: [],
    infusions?: [],
    stats?: { id: number, attributes: {} }
    skin: number,
    binding: string,
    bound_to: string,
    statsStorage?: {
        chat_link: [string],
        default_skin: number
        description: string
        details: {
            type: string,
            weight_class: 'Light' | 'Medium' | 'Heavy',
            defense: number,
            infusion_slots: number[],
            attribute_adjustment: number
            infix_upgrade: { id: number, attributes: [] }
            secondary_suffix_item_id: string
            suffix_item_id: number
        }
        flags: string[]
        game_types: string[]
        icon: string
        id: number
        level: number
        name: string
        rarity: string
        restrictions: []
        type: string
        vendor_value: number
    }
}

export type StatusType = 'loading' | 'succeed' | 'failed'
export type CharacterType = {
    "name": string,
    // "race"?: string,
    // "gender"?: string,
    "flags"?: [],
    stats?: {id: number, attributes: {}}
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
    stats?: {id: number, attributes: {}}
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
                {
                    attribute: string,
                    modifier: number
                }
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
    // upgrades: {[key: string]: UpgradeType}
    upgrades: {upgrade: UpgradeType}
    infusions: {infusion: InfusionType}
    details: UpgradeType

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

export type InfusionType = {
    "name": string,
    "description": string,
    "type": string,
    "level": number,
    "rarity": string,
    "vendor_value": number,
    "game_types": string[],
    "flags": string[],
    "restrictions": [],
    "id": number,
    "chat_link": string[],
    "icon": string,
    "details": {
        "type": string,
        "flags": string[],
        "infusion_upgrade_flags": [
            string
        ],
        "attribute_adjustment": number,
        "infix_upgrade": {
            "id": number,
            "buff": {
                "skill_id": number,
                "description": string,
            },
            "attributes": [
                {
                    "attribute": string,
                    "modifier": number,
                }
            ]
        },
        "suffix": string
    }
}

export type UpgradeType = {
    chat_link: string[],
    description: string,
    details: {
        attribute_adjustment: number
        bonuses: string[]
        flags:  string[]
        infix_upgrade: {id: number, attributes: []}
        infusion_upgrade_flags: []
        suffix: string
        type: string
    }
    flags: []
    game_types: string[]
    icon: string
    id: number
    level: number
    name: string
    rarity: string
    restrictions: []
    type: string
}


//-------------------ENUM TIPISATION--------------------//
// export type AttributesType = {
//     Power?: number,
//     Precision?: number,
//     CritDamage?: number,
//     AgonyResistance?: number,
//     BoonDuration?: number,
//     ConditionDamage?: number,
//     ConditionDuration?: number,
//     Healing?: number,
//     Toughness?: number,
//     Vitality?: number,
// }

// export enum AttributesType  {
//     Power,
//     Precision,
//     CritDamage,
//     AgonyResistance,
//     BoonDuration ,
//     ConditionDamage,
//     ConditionDuration,
//     Healing,
//     Toughness,
//     Vitality,
// }
// для всех ключей в энаме это будет ключ объекта, а его тип число
// type EnumKeys = keyof typeof AttributesType;

//-------------------ENUM TIPISATION--------------------//

// NEVER USE UNDEFINED IN TYPISATION!!!!