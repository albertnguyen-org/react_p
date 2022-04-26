import React from "react";

// import primary style
import "styles/main-style.scss";
<<<<<<< HEAD
import { CusSnackBar } from "components";
=======
import { CusSnackBar } from 'components';
>>>>>>> 8d022efe1046e7f9a7f5bb028c163f4f17ac3fa6


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
};

export default AppLayout;