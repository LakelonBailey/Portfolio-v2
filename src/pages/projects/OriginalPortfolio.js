import React from "react";
import PageBox from "../../components/PageBox";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import {
    ProjectHeader,
    ProjectInfoContainer,
    SectionContainer,
} from '../../components/ProjectPages';

const OriginalPortfolio = () => {
    return (
        <PageBox>
            <Section>
                <ProjectHeader>Original Personal Website</ProjectHeader>
                <ProjectInfoContainer>
                    <SectionContainer>
                        <h3>Links</h3>
                        <p>Github: <span><a target="_blank" rel="noreferrer" href="https://github.com/LakelonBailey/LakelonBailey.io">https://github.com/LakelonBailey/LakelonBailey.io</a></span></p>
                        <p>Live Site: <span><a target="_blank" rel="noreferrer" href="https://lakelonbailey.github.io/LakelonBailey.io">https://lakelonbailey.github.io/LakelonBailey.io</a></span></p>
                    </SectionContainer>
                    <SectionContainer>
                        <h3>Description</h3>
                        <p>This is the first website I ever deployed. I deployed it around 2 weeks after first learning HTML and CSS. I decided to include it on this portfolio as a demonstration of how far I have come since April of 2022.</p>
                        <p>I hope you enjoy it!</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>My Contribution</h3>
                        <p>I developed the entirety of this website.</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>Technologies Used</h3>
                        <p>HTML, CSS</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>What I Learned</h3>
                        <p>This project taught me the very basics of HTML, CSS, and mobile-friendly website design.</p>
                    </SectionContainer>
                </ProjectInfoContainer>
            </Section>
            <Footer />
        </PageBox>
    )
}

export default OriginalPortfolio;