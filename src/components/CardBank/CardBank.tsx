import React from 'react';
import { CusButton } from '..';
import "services";
import { onImgError } from 'services/image-service';
import "./CardBank.scss";
const CardBank = () => {

    const onClickTransfer = () => { }
    const onClickChange = () => { }

    return (
        <div className="card card-bank">
            <div className='background'></div>

            <div className='card-bank__content'>
                {/* Brank's avatar */}
                <div className='column'>
                    <img alt='banks-avatar' src='' onError={(target) => onImgError(target)} className='bank-avatar' />
                </div>
                <div className='column'>
                    {/* Bank's name | Balance title */}
                    <p className='balance-name'>Paypal Balance</p>
                    {/* Balance's value */}
                    <p className='balance-amount'>8,345.91</p>
                    {/* Balance's status */}
                    <p className='balance-status'>Available</p>
                </div>

            </div>

            <div className='row--space-between card-bank__footer'>
                <CusButton onClick={onClickTransfer}><p>Transfer</p></CusButton>
                <CusButton onClick={onClickChange}><p>Change</p></CusButton>
            </div>
        </div>
    );
}

export default CardBank;