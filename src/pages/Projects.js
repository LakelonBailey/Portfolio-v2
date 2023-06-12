import React, {useState} from "react";
import PageBox from "../components/PageBox";
import PhotoMasonry from "../components/PhotoMasonry";
import MasonryImage from "../components/MasonryImage";
import ImageModal from "../components/ImageModal";
import styled from "styled-components";
import Section, {SectionHeader} from "../components/Section";
import Footer from "../components/Footer";
import { IconContext } from "react-icons";

import ACTprepImage from '../assets/images/projects/ACTprep.jpg'


const ProjectDescriptionContainer = styled.div`
    padding: 0 12px;
    display: flex;
    flex-direction: column;
`;

const ProjectDescriptionTitle = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;

    & span:first-child {
        margin-right: 8px
    }
`;

const ProjectDescriptionButtons = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const ProjectDescriptionButton = styled.div`
  & > a, & > button {
    display: inline-block;
    padding: 10px 15px;
    color: white;
    background-color: var(--theme-blue);
    border-radius: 12px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
    transition: all 0.2s;
    margin: 6px;
    border: none;

    &:hover {
      background-color: var(--theme-light-blue);
      box-shadow: 0 2px 8px 0px rgba(0, 0, 0, .5);
    }

    &:active {
      background-color: var(--theme-light-blue);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(0,0,0,.25);
    }
  }
`;

const ProjectDescription = ({project, setPage, setModalState, modalState}) => {

    const handleSetProjectPage = () => {
        setModalState({
            ...modalState,
            active: false
        });

        setPage(project.projectPage)
    };

    return (
        <ProjectDescriptionContainer>
            <IconContext.Provider value={{size: '30px'}}>
                <ProjectDescriptionTitle>
                    <span>{project.title}</span>
                </ProjectDescriptionTitle>
            </IconContext.Provider>
            <ProjectDescriptionButtons>
                {project.githubLink && (
                    <ProjectDescriptionButton>
                        <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>
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
}

const projectsImages = [
    {
        src: ACTprepImage,
        description: {
            title: 'ACTprep.com Web Application',
            githubLink: 'https://github.com/OutliersAdvantage/ACTPrep',
            projectPage: 'actprep'
        },
        backgroundColor: 'black'
    },
];

const Projects = ({setPage}) => {
    const [modalState, setModalState] = useState({
        image: null,
        active: false
    });

    const handleImageClick = (event, image) => {
        image.width = event.target.offsetWidth;
        if (image.width < 100) {
          image.width = 300;
        }
        image.info = event.target.getBoundingClientRect();

        setModalState({
            image: image,
            active: true
        });
    }

    const images = projectsImages.map((image, i) => (
        <MasonryImage
        image={image}
        handleImageClick={(e) => handleImageClick(e, image)}
        key={i}
        />
    ));

    return (
        <PageBox>
            <Section>
                <SectionHeader>Projects</SectionHeader>
                <PhotoMasonry
                images={images}
                />
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
    )
}

export default Projects;
