/* eslint-disable react/prop-types */
import PropsType from 'prop-types';
import React, { ReactChild, ReactChildren, useState } from 'react';
import './Button.scss';

interface ICusButton {
    primary?: boolean,
    title?: string,
    isTransparent?: boolean,
}

// Merge custom props with button's attributes
type CusButtonType = ICusButton & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const CusButton = ({ props }: { props: CusButtonType }, ref: React.LegacyRef<HTMLButtonElement>) => {
    const [disabled] = useState(false);
    const [primary] = useState(props.primary);
    const [className] = useState(
        (primary === true ? 'btn--primary' : 'btn--secondary') + ' ' +
        (props.isTransparent === true ? 'btn--transparent' : '')
    );

    const [btnTitle] = useState(props.title);
    const { children } = props;

    return (
        <button onClick={props?.onClick} disabled={disabled} className={className} type={props.type || "button"} ref={ref} {...props}>
            {
                children && (children)
            }
            {
                (!children) && (
                    <p className='btn__title'>{btnTitle}</p>
                )
            }
        </button>
    );
}
const cusButtonRef = React.forwardRef<HTMLButtonElement, CusButtonType>((props, ref) => CusButton({ props: props }, ref));

export default cusButtonRef;