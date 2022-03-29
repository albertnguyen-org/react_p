import { AppBar, DialogProps, IconButton, Slide, Toolbar } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

type AnotherMethodLoginType = {

    children?: React.ReactElement,
    handleClose?: React.MouseEventHandler<HTMLButtonElement>
} & DialogProps;

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AnotherMethodLogin = (props: AnotherMethodLoginType, ref: React.Ref<HTMLDivElement>) => {
    const onClose = () => { }
    return <Dialog fullScreen open={props?.open || false} onClose={onClose} TransitionComponent={Transition} ref={ref}>
        <AppBar>
            <Toolbar>
                <IconButton edge="end"
                    color="inherit"
                    onClick={props.handleClose}
                    arial-label="close"
                >
                    <CloseIcon></CloseIcon>
                </IconButton>
            </Toolbar>
        </AppBar>
        {props?.children}</Dialog>;
}

const AnotherMethodLoginRef = React.forwardRef(AnotherMethodLogin);

export default AnotherMethodLoginRef;