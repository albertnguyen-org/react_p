import React from 'react';
import './LoginPage.scss';
import styled from 'styled-components';
import { AiOutlineQrcode } from 'react-icons/ai';
import AppLayout from '../../../core/layouts/app-layout';
import { CusButton } from '../../components';

const FormWrapper = styled.div`
    border-radius: 36px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: solid 1px gray;
    max-width: 500px;

`

const QRCodeWrapper = styled.div`
    // position: absolute;
`

const Container = styled.div`
    heigh: 100%;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
`

export default function LoginPage() {
    return <AppLayout>
        <Container>
            <FormWrapper className='login-container'>
                <QRCodeWrapper className='qr-wrapper'>
                    <CusButton>
                        <AiOutlineQrcode size={60} />
                    </CusButton>
                </QRCodeWrapper>
            </FormWrapper>
        </Container>
    </AppLayout>
} 