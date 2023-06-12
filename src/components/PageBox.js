import React from "react";
import styled from "styled-components";


const PageBoxEl = styled.div`
    min-height: 100vh;
    height: fit-content;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const PageBox = ({children}) => {
    return (
        <PageBoxEl>
            {children}
        </PageBoxEl>
    )
}

export default PageBox;