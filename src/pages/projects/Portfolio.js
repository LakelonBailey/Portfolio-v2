import React, {useState} from "react";
import PageBox from "../../components/PageBox";
import styled from "styled-components";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import {
    ProjectHeader,
    ProjectInfoContainer,
    SectionContainer,
    ImageDescription
} from '../../components/ProjectPages';

const Portfolio = () => {
    return (
        <PageBox>
            <Section>
                <ProjectHeader>Personal Website</ProjectHeader>
                <ProjectInfoContainer>
                    <SectionContainer>
                        <h3>Description</h3>
                        <p>My personal website is the most detailed and comprehensive representation of my software development career. As time goes on, I will continue to fill its pages with information regarding my learning, accomplishments, experience, and more. I coded this website using very few frameworks and libraries.</p>
                        <p>I hope you enjoy it!</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>My Contribution</h3>
                        <p>I completed the entirety of this website</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>Technologies Used</h3>
                        <p>React, styled-components, responsive-masonry</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>What I Learned</h3>
                        <p>Through this project, I challenged myself to learn CSS animations and the Canvas API. Along with this, I used this project to deepen my existing understanding of React, styled-components, and general state management principles.</p>
                    </SectionContainer>
                </ProjectInfoContainer>
            </Section>
            <Footer />
        </PageBox>
    )
}

export default Portfolio;