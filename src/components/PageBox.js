import React from "react";
import styled from "styled-components";


const PageBoxEl = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    height: 90vh;
    width: 90vw;
    background-color: var(--theme-yellow);
    border-radius: 10px;
`
const PageBox = ({children}) => {
    return (
        <PageBoxEl>
            {children}
        </PageBoxEl>
    )
}

export default PageBox;