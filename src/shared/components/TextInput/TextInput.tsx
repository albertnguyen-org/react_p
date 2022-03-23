
import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { RiEyeCloseLine } from 'react-icons/ri';
import CusButton from '../Button/Button';
import Row from '../Row';
import './TextInput.scss';


type Props = {
    title?: string,
    haseye?: boolean,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

type TextInput = Props & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const TextInput = (props: TextInput) => {
    const [openEye, setEye] = useState(props.haseye);
    const [innerType, setType] = useState(props.type || "text");

    const onClickEye = () => {
        setEye(!openEye);
        setType(openEye ? "text" : "password");
    }

    return <>
        <label>
            {props.title && props.title}
        </label>
        <div className='cus-input-wrapper'>
            <Row>
                <input name={props.name} type={innerType} onChange={props.onChange} value={props.value} autoComplete={props.autoComplete}></input>
                {props.haseye === true && <CusButton isTransparent={true} onClick={onClickEye}>
                    <>

                        {(openEye === true) && (<RiEyeCloseLine />)}
                        {(openEye === false) && (<AiOutlineEye />)}
                    </>
                </CusButton>}
            </Row>
        </div>
    </>

}

export default TextInput;
