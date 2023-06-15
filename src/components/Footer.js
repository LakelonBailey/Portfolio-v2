import Section from "./Section";
import styled from "styled-components";
import {
    FaLinkedin,
    FaEnvelopeSquare,
    FaGithubSquare
} from 'react-icons/fa';


const FooterContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;

    p {
        margin: 0;
        padding: 0;
        text-align: center;
    }
`;

const FooterIcons = styled.div`
    display: flex;
    justify-content: center;
`;

const FooterDivider = styled.div`
    border-bottom: 2px solid var(--theme-2);
    width: 60%;
    margin: 8px auto;
`;

const Footer = () => {

    return (
        <Section>
            <FooterContainer>
                <FooterIcons>
                    <a href="https://linkedin.com/in/lakelonbailey/" target="_blank" rel="noreferrer">
                                            <FaLinkedin color="#0077b5" size={'50px'} />
                    </a>
                    <a href="mailto:lake.bailey@icloud.com">
                        <FaEnvelopeSquare color="red" size={'50px'} />
                    </a>
                    <a href="https://github.com/LakelonBailey/" target="_blank" rel="noreferrer">
                        <FaGithubSquare color="black" size={'50px'} />
                    </a>
                </FooterIcons>
                <FooterDivider />
                <p>Copyright 2023 by Lakelon Bailey. All Rights Reserved.</p>
                <p>Created by Lakelon Bailey</p>
            </FooterContainer>
        </Section>
    )
}

export default Footer;