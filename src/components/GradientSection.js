import React from "react";
import styled from "styled-components";



const GradientCover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 900;
    background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
`
const GradientWrapper = styled.div`
    height: 500px;
    overflow-y: hidden;
`;
const GradientSection = ({children}) => {
    return (
        <GradientWrapper>
            <GradientCover />
            {children}
        </GradientWrapper>
    )
}

export default GradientSection;