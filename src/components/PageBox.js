import React from "react";
import styled from "styled-components";


const PageBoxEl = styled.div`
    height: fit-content;
    width: 80vw;
    background-color: var(--theme-yellow);
    border-radius: 10px;
    padding: 24px;
    margin-bottom: 50px;
`;

const PageBox = ({children}) => {
    return (
        <PageBoxEl>
            {children}
        </PageBoxEl>
    )
}

export default PageBox;