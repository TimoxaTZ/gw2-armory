import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";


export const Character = () => {

    const dispatch = useDispatch();
    // const characters = useAppSelector(state => state.characters.characters)

    useEffect(() => {
        // dispatch(getCharactersTC("D49F610A-5D10-0D4C-986A-B7469B305227A200CF65-E569-44AD-8403-2DF8D5C960D1"));
    }, [dispatch])

    return (
        <div>
            <h1>
                CharacterName
            </h1>
        </div>
    )
}