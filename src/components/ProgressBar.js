import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
    width: 100%;
    height: 12px;
    background-color: rgba(var(--theme-2-rgb), .5);
    border-radius: 50px;
    position: relative;
    overflow: hidden;
`;

const Filler = styled.div`
    height: 100%;
    width: ${({percentage}) => `${percentage}%`};
    background-color: var(--theme-1);
    border-radius: inherit;
    transition: width 1s ease-in;
    transition-delay: 0.5s;
`;

const ProgressBar = ({ percentage }) => {
    return (
        <ProgressBarContainer>
            <Filler percentage={percentage} />
        </ProgressBarContainer>
    );
};

export default ProgressBar;
