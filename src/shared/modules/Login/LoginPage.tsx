import AppLayout from 'core/layouts/app-layout';
import { emailRegExp, passwordRegExp } from 'core/services/validation-service';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineQrcode } from 'react-icons/ai';
import { CusButton, Row, TextInput } from 'shared/components';
import styled from 'styled-components';
import './LoginPage.scss';

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
`

const QRCodeWrapper = styled.div`
    position: absolute;
    top: -30px;
    right: -35px;
    background: white;
    border-radius: 3px;
`

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content:center;
    align-items: center;
`

const Form = styled.form`
    width: 100%;
`


type Props = {};

const LoginPage = (props: Props): JSX.Element => {

    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const buttonSubmitRef = useRef<HTMLButtonElement>(null);

    const { register, handleSubmit, watch, formState: {
        errors
    } } = useForm();

    useEffect(() => {
        // Focus on input user_name
        userNameRef.current?.focus();
    }, [
        // run as ComponentDidMount
    ]);

    const onKeyDownHandler = ({ name, event }: { name: string, event?: React.KeyboardEvent<HTMLInputElement> }) => {
        const isEnter = event?.key === "Enter";
        console.log({
            name, event, isEnter, refs: [
                passwordRef, buttonSubmitRef, userNameRef
            ]
        });

        if (isEnter && name === "user_name") {
            passwordRef.current?.focus();
        }

        if (isEnter && name === "password") {
            buttonSubmitRef.current?.focus();
        }
    }

    const submitForm = async (data: any) => {
        // event.preventDefault();
        // let encrpytedPwd = ProtectService.Encrypt({ data: formData.password });
        // let uname = formData.user_name;

        // TODO: Do something to submit here ...
        // console.log({ encrpytedPwd, uname });

        // const frb: Firebase = new Firebase();
        // await frb.signInWithEmailAndPassword({ email: uname, password: encrpytedPwd });
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let name = event.currentTarget.name;
        let value = event.currentTarget.value;
        let newData = { [name]: value }

        // TODO: validate `user_name` here ...
        // if (name === "user_name" && emailIsVaild(value) === false) {
        //     setFormData({ ...formData, [name]: value, "error": USER_NAME_INVAILD });
        // } else if (name === "password" && passwordIsVaild(value) === false) {
        //     setFormData({ ...formData, [name]: value, "error": PWD_INVAILD });
        // } else {

        //     setFormData({ ...formData, [name]: value, "error": '' });
        // }

    }

    const onClickQR = () => {
        // TODO: QR click handler ....
        console.log("Pressed onClickQR");
    }

    // const onSubmit = (data: React.BaseSyntheticEvent<...>) => {
    //     console.log(data);
    // }

    return <AppLayout>
        <Container className='login-container'>
            <FormWrapper>
                <QRCodeWrapper className='qr-wrapper'>
                    <CusButton onClick={onClickQR} isTransparent={true}>
                        <AiOutlineQrcode size={60} />
                    </CusButton>
                </QRCodeWrapper>

                {/* Login form */}
                <Form onSubmit={handleSubmit((data) => { console.log(data) })}>
                    <TextInput
                        title="user_name | Email" {
                        ...register("user_name",
                            {
                                required: true, pattern: emailRegExp
                            })
                        }
                        ref={userNameRef}
                        onKeyDown={(event: any) => onKeyDownHandler({ "name": "user_name", "event": event })} ></TextInput>

                    <TextInput
                        title="Password"
                        haseye
                        onKeyDown={(event: any) => onKeyDownHandler({ name: "password", "event": event })}
                        autoComplete="current-password"
                        {...register("password", {
                            required: true,
                            pattern: passwordRegExp
                        })}
                        ref={passwordRef}
                    ></TextInput>

                    {/* {
                        // Show error
                        formData.error && (
                            <Row><p>{formData.error}</p></Row>
                        )
                    } */}

                    <Row type="center" style={{ padding: "0px" }}>
                        <CusButton title="Login" onClick={submitForm} primary={true} ref={buttonSubmitRef}></CusButton>
                    </Row>
                </Form>
            </FormWrapper>
        </Container>
    </AppLayout >
}


export default LoginPage;