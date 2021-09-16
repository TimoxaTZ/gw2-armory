export type StatsType = {
    id: number,
    attributes: {
        // Power?: number,
        // Precision?: number,
        // CritDamage?: number,
        // AgonyResistance?: number,
        // BoonDuration?: number,
        // ConditionDamage?: number,
        // ConditionDuration?: number,
        // Healing?: number,
        // Toughness?: number,
        // Vitality?: number,
    }
}
export type GetCharacterType = {
    apiKey: string,
    characterName: string
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
    stats: { id: number, attributes: {} }
    skin: number,
    binding: string,
    bound_to: string
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
export type ItemRenderPropsType = {
    itemIcon: string,
    itemName: string,
    defenseTooltip: string | null,
    itemTypeTooltip: string,
    itemRarity: string,
    itemWeightClass?: string,
    itemStats?: AttributesType | undefined
    statsOfItem?: string
    // itemId: number,
}
export type AttributesType = {
    Power?: number,
    Precision?: number,
    CritDamage?: number,
    AgonyResistance?: number,
    BoonDuration?: number,
    ConditionDamage?: number,
    ConditionDuration?: number,
    Healing?: number,
    Toughness?: number,
    Vitality?: number,
}