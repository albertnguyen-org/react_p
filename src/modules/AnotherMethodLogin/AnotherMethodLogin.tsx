import { AppBar, Card, DialogProps, IconButton, List, Slide, Toolbar, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import loginMethods from "./methods.json";
import MethodItem from "./MethodItem/MethodItem";
import styled from "styled-components";

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

export interface MethodType {
    id: string,
    name: string,
    type: string,
    icon?: string,
    hot?: boolean | false
}

const ListStyled = styled(List)`
    background-color: black; 
    position: relative;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display:flex;
    flex-direction: row;
`;

const AnotherMethodLogin = (props: AnotherMethodLoginType, ref: React.Ref<HTMLDivElement>) => {

	const [methods] = useState(() => {
		const result: MethodType[] = [];
		loginMethods.map((m) => {
			const item: MethodType = {
				...m
			};

			result.push(item);
		});

		return result;
	});
	const onClose = () => { };
	return <Dialog fullScreen open={props?.open || false} onClose={onClose} TransitionComponent={Transition} ref={ref}>
		<AppBar sx={{ position: "relative" }}>
			<Toolbar>
				<Typography sx={{ ml: 2, flex: 1 }} component="div">
					{/* NOTE: Let's it empty */}
				</Typography>

				<IconButton edge="start"
					color="inherit"
					onClick={props.handleClose}
					arial-label="close"
				>
					<CloseIcon></CloseIcon>
				</IconButton>
			</Toolbar>
		</AppBar>
		{props?.children}

		<ListStyled sx={{ pt: 0 }}>
			{
				methods.map((method) => {
					return <MethodItem key={method.id} data={method}></MethodItem>;
				})}
		</ListStyled>
	</Dialog>;
};

const AnotherMethodLoginRef = React.forwardRef(AnotherMethodLogin);

export default AnotherMethodLoginRef;