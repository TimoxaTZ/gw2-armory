import {armoryApi} from "../../api/gw2-api";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CharactersReducedType, CharacterType, EquipmentType, ErrorType} from "../../app/app-types";


//createAsyncThunk<что ВОЗВРАЩАЕТ, что ПРИНИМАЕТ, тип ошибки>("уникальный_строковый_ид_санки", async(параметры) => { const res = await apiFunc(параметры)
export const getCharactersTC = createAsyncThunk<any, string, ErrorType>('characters-get', async (params) => {

    const res = await armoryApi.getCharacters(params)
    if (res.data) {
        const charactersPromises = res.data.map(async (character: CharacterType) => {
            const newEquip = character?.equipment?.map(async (item: EquipmentType) => {
               try {
                   const newStats = await armoryApi.getItem(item.id)
                       return {...item, statsStorage: newStats.data}
               } catch (e) {
                   return item
               }
            })
            // @ts-ignore

            // emel.now.All(e(g)).whatIs(low).each(121).copy(rf)

            const newEquipResponse = await Promise.all(newEquip)

            //Преобразование infix_upgrade статов в item.stats
            const statsReducedEquip = newEquipResponse.map(async (item) => {
               try {
                   const itemHasStats = item.stats
                   // Проверяем наличие статов на шмотке, если их нет, запускаем преобразование
                   if (!itemHasStats) {
                       // Получаем statsStorage у шмотки
                       const itemStatsStorage = item.statsStorage as EquipmentType["statsStorage"]
                       // Зануляем возможность storage быть undefined
                       if (itemStatsStorage) {
                           // получаем статы образца infix_upgrade
                           const infixUpgradeAttributes  = itemStatsStorage.details.infix_upgrade.attributes
                           // Преобразуем статы из вида {attribute: 'Power', modifier: 100}
                           // в массив объектов вида [{Power: 100}]
                           const attributesArray = infixUpgradeAttributes.map((stat:InfixUpgradeAttributesType) => {
                               const attribute:InfixUpgradeAttributesType = stat;
                               return {[attribute.attribute]: attribute.modifier}
                           })
                           // преобразовываем массив объектов [{Power: 100}, {Precision:50}, {Ferocity: 50}]
                           // в ассоциативный массив {Power: 100, Precision: 50, Ferocity: 50}
                           const attributesObject = Object.assign({}, ...attributesArray)
                           // получаем объект вида {id: 0, attributes: {Power: 100, Precision: 50, Ferocity: 50}}
                           const reducedStats = {id: 0, attributes: attributesObject}
                           // возвращаем предмет, но с добавленным атрибутом "stats"
                           return {...item, stats: reducedStats}
                       }
                   }  return {...item}


               } catch (e) {
                   //если что-то пошло не так, возвращаем изначальные данные
                   return item
               }

            })

            // Просим дождаться выполнения всех преобразований статов.
            const statsReduceResponse = await Promise.all(statsReducedEquip)
            console.log({...character, equipment: statsReduceResponse})

            // return {...character, equipment: newEquipResponse}
            return {...character, equipment: statsReduceResponse}
        })


        const response = await Promise.all(charactersPromises)


        // return response

        const characters: CharactersReducedType = response.reduce((acc, character) => {

            // Beta Characters Filter

            if (character.flags?.find(f => f === 'Beta')) {
                return {
                    ...acc,
                }
            }
                return {
                    ...acc, [character.name]: {
                        ...character
                    }
                };

            }, {});

            return characters
    }
    return {}
})

const initialState = {characters: {} as CharactersReducedType}

const slice = createSlice({
    name: 'characters',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getCharactersTC.fulfilled, (state, action) => {
                state.characters = action.payload
            })
    }
})

export const charactersReducer = slice.reducer;


export type InfixUpgradeAttributesType = {
    attribute: string,
    modifier: number
}




