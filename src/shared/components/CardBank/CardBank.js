import React from 'react';
import { CusButton } from '..';

const CardBank = () => {

    const onClickTransfer = () => { }
    const onClickChange = () => { }

    return (
        <div className="card bank-card-container">
            <div className='background'></div>

            <div className='column bank-card-container__content'></div>

            <div className='row bank-card-container__footer'>
                <CusButton onClick={onClickTransfer}><p>Transfer</p></CusButton>
                <CusButton onClick={onClickChange}><p>Change</p></CusButton>
            </div>
        </div>
    );
}

export default CardBank;