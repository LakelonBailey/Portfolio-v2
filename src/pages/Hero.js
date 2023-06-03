import React from "react";
import profilePic from '../assets/images/ProfilePic.png';
import PageBox from "../components/PageBox";
import styled from "styled-components";


const ProfilePic = styled.div`
    width: ${props => props.diameter};
    height: ${props => props.diameter};
    min-width: 100px;
    min-height: 100px;
    border-radius: 50%;
    background-image: url(${profilePic});
    background-size: 150%;
    background-position: top;
    margin-right: 30px;
    box-shadow:
        7.5px 0 0 rgba(196, 176, 169, .75),
        15px 0 0 rgba(196, 176, 169, .5),
        22.5px 0 0 rgba(196, 176, 169, .25);
`;

const HeroText = styled.div`
    width: 400px;
    & h1 {
        width: fit-content;
        & span:first-child {
            margin-right: 8px;
        }
        & span:last-child {
            color: black
        }
    }

    & p {
        max-width: 90%;
        margin-left: 12px;
        width: fit-content;
    }
`;

const BlueSpan = styled.span`
    color: var(--theme-blue);
`;

const Hero = () => {

    const diameter = '30vw';
    return (
            <PageBox>
                <ProfilePic diameter={diameter} />
                <HeroText>
                    <h1>
                        <BlueSpan>Lakelon</BlueSpan><span>Bailey</span>
                    </h1>
                    <p>
                        A <BlueSpan style={{fontWeight: 'bold'}}>passionate</BlueSpan> and <BlueSpan style={{fontWeight: 'bold'}}>versatile</BlueSpan> software developer with unique talent in communication and leadership.
                    </p>
                </HeroText>
            </PageBox>
    )
}

export default Hero;
