/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropsType from 'prop-types';

import "./Button.scss";

function CusButton(props, { children }) {
    const [disabled] = useState(false);
    const [isPrimary] = useState(props.isPrimary || false);
    const [className] = useState(
        'btn ' + (isPrimary ? 'btn--primary' : 'btn--secondary')
    );

    const [btnTitle] = useState(props.title || 'btn_title');

    return (
        <>
            <button onClick={props?.onClick} disabled={disabled} className={className} {...props}>
                {
                    children && ({ children })
                }
                {
                    (!children) && (
                        <p className='btn__title'>{btnTitle}</p>
                    )
                }
            </button>
        </>
    );
}

CusButton.propsTypes = {
    isPrimary: PropsType.bool,
    title: PropsType.string,
    onClick: PropsType.func
}

CusButton.defaultProps = {
    isPrimary: false,
    title: "btn_title",
    onClick: () => { }
}

export default CusButton;