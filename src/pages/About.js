import React, { useState } from "react";
import PageBox from "../components/PageBox";
import MasonryImage from "../components/MasonryImage";
import ImageModal from "../components/ImageModal";
import styled from "styled-components";
import Section, { SectionHeader } from "../components/Section";
import Footer from "../components/Footer";

import {
  FaBrain,
  FaDumbbell,
  FaSquareRootAlt,
  FaHeartbeat,
  FaMountain,
  FaTerminal,
} from "react-icons/fa";

const aboutImages = [
  {
    src: "https://picsum.photos/200/300?image=1050",
    description: <p>Test Description</p>,
  },
  {
    src: "https://picsum.photos/400/400?image=1039",
    description: <p>Test Description</p>,
  },
  {
    src: "https://picsum.photos/400/400?image=1080",
    description: <p>Test Description</p>,
  },
  {
    src: "https://picsum.photos/200/200?image=997",
    description: <p>Test Description</p>,
  },
  {
    src: "https://picsum.photos/500/400?image=287",
    description: <p>Test Description</p>,
  },
  {
    src: "https://picsum.photos/400/500?image=955",
    description: <p>Test Description</p>,
  },
  {
    src: "https://picsum.photos/200/300?image=916",
    description: <p>Test Description</p>,
  },
  {
    src: "https://picsum.photos/300/300?image=110",
    description: <p>Test Description</p>,
  },
  {
    src: "https://picsum.photos/300/300?image=206",
    description: <p>Test Description</p>,
  },
];

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const AboutSectionHeader = styled.h2`
  padding-left: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--theme-2);
  font-weight: 500;
  text-align: left;
`;

const InterestSubSection = styled.div`
  text-align: center;
  background-color: rgba(var(--theme-1-rgb), 0.5);
  margin: 12px;
  padding: 12px;
  border-radius: 5px;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  & p {
    text-align: justified;
  }
`;

const InterestHeader = styled.h3`
  margin: 0;
  color: var(--theme-1);
`;

const AboutSubSection = styled.div`
  min-width: fit-content;
  max-width: 40%;
  flex: 1;

  & p {
    margin-left: 12px;
  }
`;

const InterestIcon = styled.div`
  font-size: 2em;
  color: var(--theme-1);
`;

const BoldSpan = styled.span`
  color: var(--theme-1);
  font-weight: bold;
`;

const InterestsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  align-items: start;
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const About = () => {
  const [modalState, setModalState] = useState({
    image: null,
    active: false,
  });

  const handleImageClick = (event, image) => {
    image.width = event.target.offsetWidth;
    if (image.width < 100) {
      image.width = 300;
    }
    image.info = event.target.getBoundingClientRect();

    setModalState({
      image: image,
      active: true,
    });
  };

  const images = aboutImages.map((image, i) => (
    <MasonryImage
      image={image}
      handleImageClick={(e) => handleImageClick(e, image)}
      key={i}
    />
  ));

  return (
    <PageBox>
      <Section>
        <SectionHeader>About Me</SectionHeader>
        <Container>
          <AboutSubSection>
            <AboutSectionHeader>Who I am</AboutSectionHeader>
            <p>
              <BoldSpan>Hello! My name is Lakelon Bailey,</BoldSpan> and I am a
              first-generation, senior Computer Science student at University of
              Tennessee, Knoxville. My consistent curiosity and ambition have
              led me to develop broad experience in tutoring, coaching, team
              leadership, project management, software development, and more.
            </p>
            <p>
              I feel most comfortable when in a tenacious pursuit of knowledge,
              and I proudly avoid any doubt in myself in this pursuit.
            </p>
          </AboutSubSection>
          <AboutSubSection>
            <AboutSectionHeader>My Goals</AboutSectionHeader>
            <p>
              I am passionate about solving problems and creating lasting impact
              through <BoldSpan>Backend Engineering</BoldSpan> and{" "}
              <BoldSpan>Data Engineering</BoldSpan>. My goal is to join a
              fast-paced, dynamic team where I can learn from others and grow my
              skills in these areas.
            </p>
          </AboutSubSection>
          <AboutSubSection>
            <AboutSectionHeader>Leadership</AboutSectionHeader>
            <p>
              Coupling my extensive experience in coaching large student groups
              with my proven leadership skills, I have developed a knack for
              communicating complex ideas effectively and inspiring team
              cohesion. My time in ACT tutoring particularly honed my abilities
              to motivate individuals and build efficient learning environments.
              In the tech industry, I am prepared to leverage these skills,
              nurturing positivity, fostering teamwork, and steering teams
              through challenging times. My unique blend of coaching expertise
              and leadership will serve as a valuable asset, promoting team
              growth and overall project success.
            </p>
          </AboutSubSection>
        </Container>
      </Section>
      <Section>
        <SectionHeader>Interests</SectionHeader>
        <InterestsContainer>
          <InterestSubSection>
            <InterestIcon>
              <FaTerminal />
            </InterestIcon>
            <InterestHeader>Programming</InterestHeader>
            <p>
              Programming is not only my career of choice but also a legitimate
              passion of mine. I spend the majority of my free-time practicing
              and expanding my skillset.
            </p>
          </InterestSubSection>

          <InterestSubSection>
            <InterestIcon>
              <FaSquareRootAlt />
            </InterestIcon>
            <InterestHeader>Mathematics</InterestHeader>
            <p>
              My early-life skill and fascination with mathematics is the
              foundation of my choice of a STEM career. I hope to eventually
              find myself in a job that involves consistent usage of
              mathematics.
            </p>
          </InterestSubSection>

          <InterestSubSection>
            <InterestIcon>
              <FaDumbbell />
            </InterestIcon>
            <InterestHeader>Athletics</InterestHeader>
            <p>
              Having participated in a broad range of sports almost year-round
              since I was four years old, athletics have been and will continue
              to be my primary method of maintaining health and relieving
              stress.
            </p>
          </InterestSubSection>

          <InterestSubSection>
            <InterestIcon>
              <FaBrain />
            </InterestIcon>
            <InterestHeader>Philosophy</InterestHeader>
            <p>
              I take pride in having robust philosophies regarding success and
              happiness that I adhere to in times of challenge or doubt. I love
              sharing my philosophies with others while being open-minded to
              what I can glean from theirs.
            </p>
          </InterestSubSection>
          <InterestSubSection>
            <InterestIcon>
              <FaMountain />
            </InterestIcon>
            <InterestHeader>Outdoors</InterestHeader>
            <p>
              I love being outdoors and looking for ways to have fun for free.
              Some of my outdoor interests include hiking, mountain biking,
              swimming, and playing pickup basketball with my friends.
            </p>
          </InterestSubSection>
          <InterestSubSection>
            <InterestIcon>
              <FaHeartbeat />
            </InterestIcon>
            <InterestHeader>Health</InterestHeader>
            <p>
              I believe close attention to my mental and physical health and
              well-being has a profound impact on both myself and those around
              me, and I take interest in always exploring new ways to maintain
              or improve my health.
            </p>
          </InterestSubSection>
        </InterestsContainer>
      </Section>
      <Footer />
      <ImageModal
        isActive={modalState.active}
        setModalState={setModalState}
        image={modalState.image}
      >
        {modalState.image && modalState.image.description}
      </ImageModal>
    </PageBox>
  );
};

export default About;
