import React from "react";

import styled from "styled-components";

type LoadingType = {
    // color?: string
}

const LoadingWrapper = styled.div`
`;
function Loading({ props }: { props?: LoadingType }) {
	return <LoadingWrapper>Loading...</LoadingWrapper>;
}

export default Loading;