import React, { useState } from "react";
import PageBox from "../components/PageBox";
import PhotoMasonry from "../components/PhotoMasonry";
import MasonryImage from "../components/MasonryImage";
import ImageModal from "../components/ImageModal";
import styled from "styled-components";
import Section, { SectionHeader } from "../components/Section";
import Footer from "../components/Footer";
import { IconContext } from "react-icons";

import ACTprepImage from "../assets/images/projects/actprep/ACTprep.jpg";
import PortfolioImage from "../assets/images/projects/portfolio/PortfolioImage.png";
import CinephilesHomepage from "../assets/images/projects/cinephiles/CinephilesHomepage.png";
import QuizardHomepage from "../assets/images/projects/quizard/QuizardHomepage.png";
import MemebookFeed from "../assets/images/projects/memebook/MemebookFeed.png";
import OriginalPortfolioHomepage from "../assets/images/projects/original-portfolio/OriginalPortfolioHomepage.png";
import FragranceFinderHome from "../assets/images/projects/fragrance-finder/FragranceFinderHome.png";
import ParticleSwarmHighCognition from "../assets/images/projects/particle-swarm/particle_swarm_high_cognition.png";

const projectsImages = [
  {
    src: ACTprepImage,
    description: {
      title: "ACTprep.com Web Application",
      text: "Web application that facilitates most software processes for ACTprep.com's ACT prep program.",
      projectPage: "actprep",
    },
  },
  {
    src: MemebookFeed,
    description: {
      title: "Memebook",
      text: "Create, like, and share memes. Message your friends!",
      githubLink: "https://github.com/LakelonBailey/Memebook",
      projectPage: "memebook",
    },
  },
  {
    src: ParticleSwarmHighCognition,
    description: {
      title: "Particle Swarm",
      text: "Using Particle Swarm Optimization to create shapes!",
      githubLink: "https://github.com/LakelonBailey/ParticleSwarm",
      projectPage: "particle-swarm",
    },
  },
  {
    src: PortfolioImage,
    description: {
      title: "Personal Website",
      text: "Personal website that details my skills and experience as a software developer",
      githubLink: "https://github.com/LakelonBailey/LakelonBailey.github.io",
      projectPage: "portfolio",
    },
  },
  {
    src: CinephilesHomepage,
    description: {
      title: "Cinephiles",
      text: "Search for movies and add them to your watchlist!",
      githubLink: "https://github.com/LakelonBailey/Cinephiles",
      projectPage: "cinephiles",
    },
  },
  {
    src: QuizardHomepage,
    description: {
      title: "Quizard",
      text: "Create and take quizzes. Knowledge is power!",
      githubLink: "https://github.com/NangTuong/Quizard",
      projectPage: "quizard",
    },
  },
  {
    src: FragranceFinderHome,
    description: {
      title: "Fragrance Finder",
      text: "Find the best fragrance prices!",
      projectPage: "fragrance-finder",
    },
  },
  {
    src: OriginalPortfolioHomepage,
    description: {
      title: "Original Portfolio",
      text: "My original personal website and first-ever deployed website.",
      githubLink: "https://github.com/LakelonBailey/LakelonBailey.io",
      projectPage: "original-portfolio",
    },
  },
];

const ProjectDescriptionContainer = styled.div`
  padding: 0 12px;
  display: flex;
  flex-direction: column;
`;

const ProjectDescriptionTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  padding: 0;
`;

const ProjectDescriptionButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 8px;
`;

const ProjectDescriptionButton = styled.div`
  & > a,
  & > button {
    background-color: #ffffff;
    border: 1px solid rgb(209, 213, 219);
    border-radius: 0.5rem;
    box-sizing: border-box;
    color: #111827;
    font-family: "Inter var", ui-sans-serif, system-ui, -apple-system, system-ui,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.75rem 1rem;
    text-align: center;
    text-decoration: none #d1d5db solid;
    text-decoration-thickness: auto;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
      background-color: rgb(249, 250, 251);
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    &:focus-visible {
      box-shadow: none;
    }
  }
`;

const ProjectDescription = ({
  project,
  setPage,
  setModalState,
  modalState,
}) => {
  const handleSetProjectPage = () => {
    setModalState({
      ...modalState,
      active: false,
    });

    setPage(project.projectPage);
  };

  return (
    <ProjectDescriptionContainer>
      <IconContext.Provider value={{ size: "30px" }}>
        <ProjectDescriptionTitle>{project.title}</ProjectDescriptionTitle>
        <p>{project.text}</p>
      </IconContext.Provider>
      <ProjectDescriptionButtons>
        {project.githubLink && (
          <ProjectDescriptionButton>
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </ProjectDescriptionButton>
        )}
        {project.projectPage && (
          <ProjectDescriptionButton>
            <button onClick={handleSetProjectPage}>View Project Page</button>
          </ProjectDescriptionButton>
        )}
      </ProjectDescriptionButtons>
    </ProjectDescriptionContainer>
  );
};

const Projects = ({ setPage }) => {
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

  const images = projectsImages.map((image, i) => (
    <MasonryImage
      image={image}
      handleImageClick={(e) => handleImageClick(e, image)}
      key={i}
      customHover={image.description.title}
    />
  ));

  return (
    <PageBox>
      <Section>
        <SectionHeader>Projects</SectionHeader>
        <PhotoMasonry images={images} />
      </Section>
      <Footer />
      <ImageModal
        isActive={modalState.active}
        setModalState={setModalState}
        image={modalState.image}
      >
        {modalState.image && (
          <ProjectDescription
            project={modalState.image.description}
            setPage={setPage}
            modalState={modalState}
            setModalState={setModalState}
          />
        )}
      </ImageModal>
    </PageBox>
  );
};

export default Projects;
