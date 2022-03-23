/* eslint-disable react/prop-types */
import PropsType from 'prop-types';
import React, { ReactChild, ReactChildren, useState } from 'react';
import './Button.scss';

type Props = {
    primary?: boolean,
    title?: string,
    isTransparent?: boolean,
}

// Merge custom props with button's attributes
type CusButton = Props & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const CusButton = ({
    ...props }: CusButton): JSX.Element => {
    const [disabled] = useState(false);
    const [primary] = useState(props.primary);
    const [className] = useState(
        (primary ? 'btn--primary' : 'btn--secondary') + ' ' +
        (props.isTransparent === true ? 'btn--transparent' : null)
    );

    const [btnTitle] = useState(props.title);

    const { children } = props;
    return (
        <>
            <button onClick={props?.onClick} disabled={disabled} className={className} type={props.type || "button"}>
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

export default CusButton;