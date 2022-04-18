import React from 'react';

// import primary style
import "core/styles/main-style.scss";
import { CusSnackBar } from 'shared/components';


type AppLayoutType = {
    openSnackBar?: boolean,
    snackBarMessage?: string,
    openModal?: boolean,
    modalChildren?: React.ReactElement,
    snackBarCallBack?: (event: React.SyntheticEvent) => void;

}

const AppLayout = (props?: any & AppLayoutType) => {
    return (
        <>
            <div className="body">
                {props.children}
            </div>
            <CusSnackBar open={props.openSnackBar} message={props?.snackBarMessage} onClose={props?.snackBarCallBack} severity={props?.severity}></CusSnackBar>
        </>
    );
}

export default AppLayout;