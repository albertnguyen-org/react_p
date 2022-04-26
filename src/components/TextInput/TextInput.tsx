
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { RiEyeCloseLine } from "react-icons/ri";
import CusButton from "../Button/Button";
import Row from "../Row";
import "./TextInput.scss";

type Props = {
    title?: string,
    haseye?: boolean
}

type TextInputType = Props & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({ props }: { props: TextInputType }, ref: React.LegacyRef<HTMLInputElement>) => {
	const [openEye, setEye] = useState(props?.haseye);
	const [innerType, setType] = useState(props?.type || "text");

	const onClickEye = () => {
		setEye(!openEye);
		setType(openEye ? "text" : "password");
	};

	return <>
		<label>
			{props?.title && props?.title}
		</label>
		<div className='cus-input-wrapper'>
			<Row>
				<input ref={ref} name={props?.name} type={innerType} onChange={props?.onChange} value={props?.value} autoComplete={props?.autoComplete}></input>
				{props?.haseye === true && <CusButton onClick={onClickEye} isTransparent={true} style={{ "width": "fit-content" }}>
					<>
						{(openEye === true) && (<RiEyeCloseLine />)}
						{(openEye === false) && (<AiOutlineEye />)}
					</>
				</CusButton>}
			</Row>
		</div>
	</>;

};
// For using ref in reusable component
const InputRef = React.forwardRef<HTMLInputElement, TextInputType>((props, ref) => TextInput({ props: props }, ref));

export default InputRef;
