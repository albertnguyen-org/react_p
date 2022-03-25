/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Loading from '../Loading';
import './Button.scss';
import styled from 'styled-components';

interface ICusButton {
    title?: string,
    primary?: boolean,
    isTransparent?: boolean,
    isLoading?: boolean
}

// Merge custom props with button's attributes
type CusButtonType = ICusButton & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const CusButton = ({ props }: { props: CusButtonType }, ref: React.LegacyRef<HTMLButtonElement>) => {
    const [disabled] = useState(false);
    const [className] = useState(
        (props.primary === true ? 'btn--primary' : 'btn--secondary') + ' ' +
        (props.isTransparent === true ? 'btn--transparent' : '')
    );

    const [btnTitle] = useState(props.title);
    const { children } = props;


    return (
        <button onClick={props?.onClick} disabled={disabled} className={className} type={props.type || "button"} ref={ref} style={props.style}>
            {
                (props.isLoading) && (<Loading></Loading>)
            }

            {
                (!props.isLoading && children) && (children)
            }
            {
                (!props.isLoading && !children) && (
                    <p className='btn__title'>{btnTitle}</p>
                )
            }
        </button>
    );
}
const cusButtonRef = React.forwardRef<HTMLButtonElement, CusButtonType>((props, ref) => CusButton({ props: props }, ref));

export default cusButtonRef;