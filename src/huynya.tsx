import React, {FC, useState} from 'react';

type HuynyaPropsType = {
    src?: string
}

const Huynya:FC<HuynyaPropsType> = (props) => {

    const [state, setState] = useState(false)

    const onMouseHandler = () => {
        setState(true)
    }
    const onMouseLeave = () => {
        setState(false)
    }

    return (
        <div style={{padding: 10, backgroundColor: "#fff"}} onMouseEnter={onMouseHandler} onMouseLeave={onMouseLeave}>
        {/*<div onMouseOver={() => setState(true)} onMouseLeave={() => setState(false)}>*/}
             ItemIcon(ONLY ICON)
            {state && props.children}
        </div>
    );
};

export default Huynya;