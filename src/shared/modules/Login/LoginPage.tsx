import AppLayout from 'core/layouts/app-layout';
import { ProtectService } from 'core/services';
import React, { useState } from 'react';
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
    border: solid 1px gray;
    max-width: 500px;
    width: 300px;
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
    const [formData, setFormData] = useState({ 'userName': '', 'password': '' });
    const [isVaild, setFormVaild] = useState(false);

    const validateForm = () => { }

    const submitForm = (event: React.MouseEvent<HTMLButtonElement>): void => {
        // event.preventDefault();
        let encrpytedPwd = ProtectService.Encrypt({ data: formData.password });
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let name = event.currentTarget.name;
        let value = event.currentTarget.value;
        let newData = { [name]: value }

        setFormData({ ...formData, [name]: value });
    }

    const onClickQR = () => {
        // TODO: QR click handler ....
        console.log("Pressed onClickQR");
    }

    return <AppLayout>
        <Container className='login-container'>
            <FormWrapper>
                <QRCodeWrapper className='qr-wrapper'>
                    <CusButton onClick={onClickQR}>
                        <AiOutlineQrcode size={60} />
                    </CusButton>
                </QRCodeWrapper>

                {/* Login form */}
                <Form>
                    <TextInput title="Username" name="userName" autoComplete='username' value={formData.userName} onChange={handleChange} ></TextInput>
                    <TextInput title="Password" name="password" autoComplete='password' type='password' value={formData.password} onChange={handleChange} haseye={true} ></TextInput>
                    <Row type="center">
                        <CusButton title="Login" onClick={submitForm} isTransparent={true}></CusButton>
                    </Row>
                </Form>
            </FormWrapper>
        </Container>
    </AppLayout>
}


export default LoginPage;