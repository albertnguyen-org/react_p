import { Card } from '@mui/material';
import React, { useState } from 'react';
import { MethodType } from '../AnotherMethodLogin';
import './MethodItem.scss';
type Props = {
    data: MethodType,
    children?: React.ReactElement
}

const MethodItem = (props: Props) => {
    const [item] = useState(props.data);

    const returnClassesName = (): string => {
        let result = "column method-item-container";
        if (item.hot) {
            result += "--hot"
        }
        return result;
    }
    return <div key={item.id}>
        <div className={returnClassesName()}>
            {item.hot && (<div className="hot-wrapper">HOT</div>)}

            <div className='column content-wrapper'> {item.name} </div>
        </div>
    </div >
}

export default MethodItem;
