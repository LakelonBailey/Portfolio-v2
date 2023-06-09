import React, {useState} from "react";
import PageBox from "../components/PageBox";
import PhotoMasonry from "../components/PhotoMasonry";
import MasonryImage from "../components/MasonryImage";
import ImageModal from "../components/ImageModal";
import styled from "styled-components";

import {
    FaUserAlt,
    FaChartLine,
    FaUsers,
    FaHandsHelping,
    FaBrain,
    FaDumbbell,
    FaSquareRootAlt,
    FaHeartbeat,
    FaMountain,
    FaTerminal

} from 'react-icons/fa';

const aboutImages = [
    {
        src: "https://picsum.photos/200/300?image=1050",
        description: 'Test Description',
    },
    {
        src: "https://picsum.photos/400/400?image=1039",
        description: 'Test Description',
    },
    {
        src: "https://picsum.photos/400/400?image=1080",
        description: 'Test Description',
    },
    {
        src: "https://picsum.photos/200/200?image=997",
        description: 'Test Description',
    },
    {
        src: "https://picsum.photos/500/400?image=287",
        description: 'Test Description',
    },
    {
        src: "https://picsum.photos/400/500?image=955",
        description: 'Test Description',
    },
    {
        src: "https://picsum.photos/200/300?image=916",
        description: 'Test Description',
    },
    {
        src: "https://picsum.photos/300/300?image=110",
        description: 'Test Description',
    },
    {
        src: "https://picsum.photos/300/300?image=206",
        description: 'Test Description',
    },
];

const Section = styled.div`
`

const SectionHeader = styled.h2`
`

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const SubSection = styled.section`
  margin: 20px;
  text-align: center;
  min-width: 400px;
  flex: 1;
`;

const Icon = styled.div`
  font-size: 2em;
  margin-bottom: 10px;
`;

const About = () => {
    const [imageModalActive, setImageModalActive] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const handleImageClick = (event, image) => {
        image.width = event.target.offsetWidth;
        if (image.width < 100) {
          image.width = 300;
        }
        image.info = event.target.getBoundingClientRect();

        setModalImage(image);
        setImageModalActive(true);
    }

    const images = aboutImages.map((image, i) => (
        <MasonryImage
        image={image}
        handleImageClick={(e) => handleImageClick(e, image)}
        key={i}
        />
    ))

    return (
        <PageBox>
            <Section>
                <SectionHeader>Get to know me</SectionHeader>
                <Container>
                    <SubSection>
                        <Icon><FaUserAlt /></Icon>
                        <SectionHeader>Personal Philosophy</SectionHeader>
                        <p>Replace this text with your philosophy.</p>
                    </SubSection>

                    <SubSection>
                        <Icon><FaChartLine /></Icon>
                        <SectionHeader>Professional Goals</SectionHeader>
                        <p>Replace this text with your professional goals.</p>
                    </SubSection>

                    <SubSection>
                        <Icon><FaUsers /></Icon>
                        <SectionHeader>Leadership and Communication</SectionHeader>
                        <p>Replace this text with your experiences and approach to leadership.</p>
                    </SubSection>

                    <SubSection>
                        <Icon><FaHandsHelping /></Icon>
                        <SectionHeader>Involvment</SectionHeader>
                        <p>Replace this text with your involvement experiences.</p>
                    </SubSection>
                </Container>
            </Section>
            <Section>
                <SectionHeader>Interests</SectionHeader>
                <Container>
                    <SubSection>
                        <Icon><FaTerminal /></Icon>
                        <SectionHeader>Programming</SectionHeader>
                        <p>Replace this text with your interest.</p>
                    </SubSection>

                    <SubSection>
                        <Icon><FaSquareRootAlt /></Icon>
                        <SectionHeader>Mathematics</SectionHeader>
                        <p>Replace this text with your interest.</p>
                    </SubSection>

                    <SubSection>
                        <Icon><FaDumbbell /></Icon>
                        <SectionHeader>Athletics</SectionHeader>
                        <p>Replace this text with your interest.</p>
                    </SubSection>

                    <SubSection>
                        <Icon><FaBrain /></Icon>
                        <SectionHeader>Philosophy</SectionHeader>
                        <p>Replace this text with your interest.</p>
                    </SubSection>
                    <SubSection>
                        <Icon><FaMountain /></Icon>
                        <SectionHeader>Outdoors</SectionHeader>
                        <p>Replace this text with your interest.</p>
                    </SubSection>
                    <SubSection>
                        <Icon><FaHeartbeat /></Icon>
                        <SectionHeader>Health</SectionHeader>
                        <p>Replace this text with your interest.</p>
                    </SubSection>
                </Container>
            </Section>
            <Section>
                <SectionHeader>Photos</SectionHeader>
                <PhotoMasonry
                images={images}
                />
            </Section>
            <ImageModal
            isActive={imageModalActive}
            setModalActive={setImageModalActive}
            image={modalImage}
            />
        </PageBox>
    )
}

export default About;
