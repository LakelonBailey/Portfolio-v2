import React from "react";
import profilePic from '../assets/images/ProfilePic.png';
import PageBox from "../components/PageBox";
import styled from "styled-components";
import Section from "../components/Section";
import resumeFile from "../assets/files/lakelon_bailey_resume.pdf";

import {
    FaLinkedin,
    FaEnvelopeSquare,
    FaGithubSquare,
    FaFileDownload
} from "react-icons/fa";


const ProfilePic = styled.div`
    width: ${props => props.diameter};
    height: ${props => props.diameter};
    min-width: 200px;
    min-height: 200px;
    border-radius: 50%;
    background-image: url(${profilePic});
    background-size: 150%;
    background-position: top;
    margin: 0 50px;
    box-shadow:
        7.5px 0 0 rgba(var(--theme-4-rgb), .75),
        15px 0 0 rgba(var(--theme-4-rgb), .5),
        22.5px 0 0 rgba(var(--theme-4-rgb), .25);
`;

const HeroText = styled.div`
    width: fit-content;
    max-width: 500px;
    & h1 {
        width: 100%;
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
    color: var(--theme-1);
`;

const HeroContainer = styled.div`
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
        flex-direction: column;
        text-align: center;
    }
`;

const HeroContent = styled.div`
    margin-top: 0;
`

const HeroIcons = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 10%;

    & a {
        position: relative;
    }

    @media (max-width: 1000px) {
        margin: 0 20px;
        & a {
            margin-right: 0;
        }
        justify-content: center;
    }
`;

const DownloadResumeButton = styled.a`
    text-decoration: none;
    margin: 0;
    display: flex;
    align-items: center;
    height: 28px;
    background-color: var(--theme-1);
    width: fit-content;
    padding: 8px 12px;
    border-radius: 5px;
    color: var(--theme-3);
    margin-bottom: 3px;

    & span:first-child {
        margin-right: 8px
    }
`

const Hero = () => {

    const diameter = '30vw';
    return (
            <PageBox>
                <Section>
                    <HeroContainer>
                        <ProfilePic diameter={diameter} />
                        <HeroContent>
                            <HeroText>
                                <h1>
                                    <BlueSpan>Lakelon</BlueSpan><span>Bailey</span>
                                </h1>
                                <p>
                                    A <BlueSpan style={{fontWeight: 'bold'}}>passionate</BlueSpan> and <BlueSpan style={{fontWeight: 'bold'}}>versatile</BlueSpan> software developer with unique talent in communication and leadership.
                                </p>
                            </HeroText>
                            <HeroIcons>
                                <a href="https://linkedin.com/in/lakelonbailey/" target="_blank" rel="noreferrer">
                                    <FaLinkedin color="#0077b5" size={'50px'}/>
                                </a>
                                <a href="mailto:lake.bailey@icloud.com">
                                    <FaEnvelopeSquare color="red" size={'50px'} />
                                </a>
                                <a href="https://github.com/LakelonBailey/" target="_blank" rel="noreferrer">
                                    <FaGithubSquare color="black" size={'50px'} />
                                </a>
                                <DownloadResumeButton href={resumeFile} target="_blank"><span>Resume</span><span><FaFileDownload size={'15px'}/></span></DownloadResumeButton>
                            </HeroIcons>
                        </HeroContent>
                    </HeroContainer>
                </Section>
            </PageBox>
    )
}

export default Hero;
