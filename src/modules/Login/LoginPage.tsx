<<<<<<< HEAD
import FirebaseAPI from "apis/firebase-apis";
import AppLayout from "layouts/app-layout";
import { emailRegExp, passwordRegExp } from "services/validation-service";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineQrcode } from "react-icons/ai";
import { CusButton, Row, TextInput } from "components";
import styled from "styled-components";
import "./LoginPage.scss";

import { AnotherMethodLogin } from "../index";
=======
import FirebaseAPI from 'apis/firebase-apis';
import AppLayout from 'layouts/app-layout';
import { emailRegExp, passwordRegExp } from 'services/validation-service';
import React, { useEffect, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { AiOutlineQrcode } from 'react-icons/ai';
import { CusButton, Row, TextInput } from 'components';
import styled from 'styled-components';
import './LoginPage.scss';

import { AnotherMethodLogin } from '../index';
>>>>>>> 8d022efe1046e7f9a7f5bb028c163f4f17ac3fa6

const FormWrapper = styled.div`
    border-radius: 36px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    // border: solid 1px gray;
    max-width: 500px;
    width: 300px;
    min-height: 300px;
`;

const QRCodeWrapper = styled.div`
    position: absolute;
    top: -30px;
    right: -35px;
    background: white;
    border-radius: 3px;
`;

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content:center;
    align-items: center;
`;

const Form = styled.form`
    width: 100%;
`;


type Props = {};

type FormData = {
    user_name: string,
    password: string
}

const LoginPage = (props: Props): JSX.Element => {

	const userNameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const buttonSubmitRef = useRef<HTMLButtonElement>(null);
	const [isLoading, setLoading] = useState(false);
	const [snackbar, setSnackBar] = useState({
		open: false,
		message: "",
		severity: "info",
		callBack: () => {

			// Reset snackbar config to default
			setSnackBar({
				...snackbar, open: false,
				message: "",
				severity: "info",
			});
		}
	});

	const { register, handleSubmit, control, formState: {
		errors
	} } = useForm<FormData>();

	const [isOpenAnother, setOpenAnother] = useState(false);
	const anotherLoginMethodRef = useRef(null);

	useEffect(() => {
		// Focus on input user_name
		userNameRef.current?.focus();
	}, [
		// run as ComponentDidMount
	]);

	const onKeyDownHandler = ({ name, event }: { name: string, event?: React.KeyboardEvent<HTMLInputElement> }) => {
		const isEnter = event?.key === "Enter";

		if (isEnter && name === "user_name") {
			passwordRef.current?.focus();
		}

		if (isEnter && name === "password") {
			buttonSubmitRef.current?.focus();
		}
	};

	const submitForm = handleSubmit(async (data: FormData) => {
		console.log(data);
		const email = data["user_name"];
		const password = data["password"];

		const firebaseApis: FirebaseAPI = new FirebaseAPI();

		setLoading(true);
		const res = await firebaseApis.signInWithEmailAndPassword({ email: email, password: password });
		// let token = res.getIdToken();
		if (res.getIdToken()) {
			setSnackBar({
				...snackbar,
				message: "Login success",
				open: true,
				severity: "success"
			});
		}
		setLoading(false);

	}, (e) => {
		console.error(e);
		setLoading(false);

		setSnackBar({
			...snackbar,
			message: "Login failed",
			open: true,
			severity: "error"
		});
	});

	const onClickQR = () => {
		// TODO: QR click handler ....
		console.log("Pressed onClickQR");
	};

	const onClickOthers = () => setOpenAnother(true);

	const onHandleCloseDialog = () => setOpenAnother(false);

	return <>
		<AppLayout openSnackBar={snackbar.open} snackBarMessage={snackbar.message} snackBarCallBack={snackbar.callBack} severity={snackbar.severity}>
			<Container className='login-container'>
				<FormWrapper>
					<QRCodeWrapper className='qr-wrapper'>
						<CusButton onClick={onClickQR} isTransparent={true}>
							<AiOutlineQrcode size={60} />
						</CusButton>
					</QRCodeWrapper>

					{/* Login form */}
					<Form onSubmit={submitForm}>
						<Controller
							name='user_name'
							control={control}
							defaultValue=''
							rules={{ required: true, pattern: emailRegExp }}
							render={({ field }) => {
								return <TextInput
									title="User name (or Email)"
									{...field}
									ref={userNameRef}
									autoComplete="username"
									onKeyDown={(event: any) => onKeyDownHandler({ "name": field.name, "event": event })}></TextInput>;
							}}
						/>

						<Controller
							name='password'
							control={control}
							defaultValue=''
							rules={{ required: true, pattern: passwordRegExp }}
							render={({ field }) =>
								<TextInput
									{...field}
									title="Password"
									onKeyDown={(event: any) => onKeyDownHandler({ name: field.name, "event": event })}
									autoComplete="current-password"
									ref={passwordRef}
									haseye={true}
								></TextInput>}
						/>

						<Row type="center" style={{ padding: "0px" }}>
							<CusButton type="submit" title="Login" ref={buttonSubmitRef} primary={true} isLoading={isLoading}></CusButton>
						</Row>
					</Form>
					<Row type="center" style={{ padding: "0px" }}>
						<CusButton title="Other methods" primary={false} onClick={onClickOthers}></CusButton>
					</Row>
				</FormWrapper>
			</Container>
		</AppLayout >

		<AnotherMethodLogin open={isOpenAnother} ref={anotherLoginMethodRef} handleClose={onHandleCloseDialog}></AnotherMethodLogin>
	</>;
};


export default LoginPage;