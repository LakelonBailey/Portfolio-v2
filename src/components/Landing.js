import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import NetworkAnimation from "./NetworkAnimation";

const LANDING_ACTIVATED = true;

const slideOut = (direction) => keyframes`
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(${direction === "left" ? "-" : ""}150%);
    }
`;

const LandingContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;

  & > div {
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    margin: 0;
    padding: 0;
    background-color: var(--theme-2);
    display: flex;
    align-items: center;
    overflow: hidden;

    & p {
      font-size: 10vw;
      font-weight: 700;
      color: var(--theme-3);
      padding: 2vh 0;
      background-color: rgba(var(--theme-1-rgb), 0.5);
      width: 100%;
    }
  }

  & div:first-child {
    justify-content: flex-end;
    left: 0;
    animation: ${slideOut("left")} 2s 2s forwards;

    & p {
      text-align: right;
    }
  }
  & div:last-child {
    justify-content: flex-start;
    right: 0;
    animation: ${slideOut("right")} 2s 2s forwards;
    & p {
      padding-left: 2vw;
      text-align: left;
    }
  }
`;
const Landing = () => {
  const [isVisible, setIsVisible] = useState(true);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

  // Hide landing page after animation finishes
  useEffect(() => {
    const totalAnimationTime = 4000; // Total animation time in milliseconds (2s delay + 2s animation)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, totalAnimationTime);

    return () => clearTimeout(timer); // Clear timeout if the component is unmounted before the timer ends
  }, []);

  return LANDING_ACTIVATED && isVisible ? (
    <LandingContainer>
      <div ref={leftSideRef}>
        <NetworkAnimation parentRef={leftSideRef} />
        <p>Lakelon</p>
      </div>
      <div ref={rightSideRef}>
        <NetworkAnimation parentRef={rightSideRef} />
        <p>Bailey</p>
      </div>
    </LandingContainer>
  ) : null;
};

export default Landing;
