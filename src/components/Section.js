import React from "react";
import styled from "styled-components";


const SectionEl = styled.div`
    flex-grow: 1;
    width: 100%;
    border-top: 1px solid transparent;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .3);
    padding: 0 12px;
    padding-bottom: 12px;
    background-color: var(--theme-3);

    ${({height}) => height && `
        height: ${height};
    `}

    ${({maxHeight}) => maxHeight && `
        height: ${maxHeight};
    `}

    &:not(:last-child) {
        margin-bottom: 12px;
    }

    &:last-child {
        padding-bottom: 24px;
    }
`;

const Section = ({children, height, maxHeight}) => {

    return (
        <SectionEl
        height={height}
        >
            {children}
        </SectionEl>
    );
}

const SectionHeader = styled.h2`
    color: var(--theme-3);
    padding: 12px 24px 12px 30px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    position: relative;
    left: -25px;
    background-color: var(--theme-2);
    width: fit-content;
`;

export default Section;

export {
    SectionHeader
}
