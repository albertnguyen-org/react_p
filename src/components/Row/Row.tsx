import React, { ReactNode } from "react";
import styled from "styled-components";

const BaseRow = styled.div`
    display: flex;
    flex-direction: row;
`;

const CenterLeft = styled(BaseRow)`
    align-item: center;
    justify-content: flex-start;
`;
const Center = styled(BaseRow)`
    justify-content: center;
    align-items: center;
`;
const CenterRight = styled(BaseRow)`
    align-item: center;
    justify-content: flex-end;
`;
type Props = {
    type?: string | undefined, // center-left, center, center-right,
    children?: ReactNode | undefined,
    style?: React.CSSProperties | undefined
}

const Row = (props: Props) => {
	const defaultStyle: React.CSSProperties = {
		"padding": "10px"
	};

	switch (props.type) {
	case "center-left": return <CenterLeft style={props.style || defaultStyle}>{props.children}</CenterLeft>;
	case "center": return <Center style={props.style || defaultStyle}>{props.children}</Center>;
	case "center-right": return <CenterRight style={props.style || defaultStyle}>{props.children}</CenterRight>;
	default: return <CenterLeft style={props.style || defaultStyle}>{props.children}</CenterLeft>;
	}
};

export default Row;