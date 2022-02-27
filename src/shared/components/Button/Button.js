import React, { useState } from 'react';
import "./Button.scss";

function CusButton(props, { children }) {
    const [disabled, setDisable] = useState(false);
    const [isPrimary, setPrimary] = useState(props.isPrimary || false);
    const [className, setClassName] = useState(
        'btn ' + (isPrimary ? 'btn--primary' : 'btn--secondary')
    );

    const [btnTitle, setTitle] = useState(props.title || 'btn_title');

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

export default CusButton;