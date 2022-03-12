/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropsType from 'prop-types';
import './Button.scss';
function CusButton(props) {
    const [disabled] = useState(false);
    const [primary] = useState(props.primary);
    const [className] = useState(
        (primary ? 'btn--primary' : 'btn--secondary') + ' btn--transparent'
    );

    const [btnTitle] = useState(props.title);


    const { children } = props;
    return (
        <>
            <button onClick={props?.onClick} disabled={disabled} className={className} {...props}>
                {
                    children && (children)
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
    primary: PropsType.bool,
    title: PropsType.string,
    onClick: PropsType.func
}

CusButton.defaultProps = {
    primary: "false",
    title: null,
    onClick: null
}

export default CusButton;