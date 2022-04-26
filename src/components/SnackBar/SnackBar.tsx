import React from "react";
import { Alert, AlertProps, Snackbar, SnackbarProps } from "@mui/material";

type CusSnackBarType = { message?: string } & SnackbarProps & AlertProps;

function CusSnackBar(props?: CusSnackBarType) {

	const defaultConfig = {
		durationTime: 3000,
		message: "Message ..."
	};

	return <Snackbar key={props?.key} open={props?.open} autoHideDuration={props?.autoHideDuration || defaultConfig.durationTime} onClose={props?.onClose}>
		<Alert severity={props?.severity} onClose={props?.onClose} sx={{ width: "100%" }}>{props?.message || defaultConfig.message}</Alert>
	</Snackbar>;


}

export default CusSnackBar;