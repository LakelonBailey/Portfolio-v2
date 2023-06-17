import React from "react";
import styled, { keyframes } from "styled-components";

const theme = keyframes`
    0% {
        background: #FFFFFF;
    }

    20% {
        background: #F5F5F5;
    }

    40% {
        background: #DCDCDC;
    }

    60% {
        background: #C0C0C0;
    }

    80% {
        background: #c7c7c7;
    }

    100% {
        background: #FFFFFF;
    }
`;

const background = keyframes`
  0% {
      transform: rotate(0deg);
  }

  100% {
      transform: rotate(360deg);
  }
`;

const SectionEl = styled.div`
    flex-grow: 1;
    width: 100%;
    border-top: 1px solid transparent;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .3);
    padding: 0;
    padding-bottom: 12px;
    position: relative;
    z-index: 1;
    animation: ${theme} 21s linear infinite;
    overflow: hidden;

    & > *:not(h2) {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }

    &:after,
    &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        top: 0;
        width: 100%;  // IE/Edge
        height: 100%; // fallback
        background: rgba(0,0,0,0.05);
        animation: ${background} 90s linear infinite;
    }

    &:after {
        left: 15%;
    }

    &:before {
        right: 15%;
        animation-delay: -30s;
        animation-direction: reverse;
    }

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
        maxHeight={maxHeight}
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
    left: -15px;
    background-color: var(--theme-2);
    width: fit-content;
`;

export default Section;

export {
    SectionHeader
}
