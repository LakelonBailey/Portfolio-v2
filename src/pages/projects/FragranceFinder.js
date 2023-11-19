import React, {useState} from "react";
import PageBox from "../../components/PageBox";
import Section from "../../components/Section";
import PhotoMasonry from "../../components/PhotoMasonry";
import MasonryImage from "../../components/MasonryImage";
import ImageModal from "../../components/ImageModal";
import Footer from "../../components/Footer";

import {
    ProjectHeader,
    ProjectInfoContainer,
    SectionContainer,
    ImageDescription,
    BackToProjectsLink
} from '../../components/ProjectPages';

// Images
import FragranceFinderHome from '../../assets/images/projects/fragrance-finder/FragranceFinderHome.png';

const fragranceFinderImages = [
    {
        src: FragranceFinderHome,
        description: (<ImageDescription>This is the home page for Fragrance Finder. It allows users to search, sort, and filter thousands of different fragrances from over 8 different websites.</ImageDescription>)
    }
]

const FragranceFinder = ({setPage}) => {

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

    const images = fragranceFinderImages.map((image, i) => (
        <MasonryImage
        image={image}
        handleImageClick={(e) => handleImageClick(e, image)}
        key={i}
        />
    ));

    return (
        <PageBox>
            <Section>
                <ProjectHeader>Fragrance Finder</ProjectHeader>
                <ProjectInfoContainer>
                    <SectionContainer>
                        <BackToProjectsLink onClick={() => setPage('projects')} href="#">&#8592; Back to Projects</BackToProjectsLink>
                        {/* <h3>Links</h3>
                        <p>GitHub: <span><a href="https://github.com/LakelonBailey/Memebook" target="_blank" rel="noreferrer">https://github.com/LakelonBailey/Memebook</a></span></p> */}
                    </SectionContainer>
                    <SectionContainer>
                        <h3>Description</h3>
                        <p>Fragrance Finder is a full-stack application that lists fragrances from over 8 different websites. Users are able to add fragrances to their watchlist, and will then be emailed if there are any price drops on those fragrances.</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>My Contribution</h3>
                        <p>Apart from the web scrapers and the emailing functionality, I developed the entirety of this application.</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>Technologies Used</h3>
                        <p><strong>Front-end:</strong> React, React Bootstrap, JSON Web Token (JWT)</p>
                        <p><strong>Back-end:</strong> Express, Sequelize, MySQL, JSON Web Token (JWT)</p>
                        <p><strong>Web Scraping:</strong> Playwright, Beautiful Soup</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>What I Learned</h3>
                        <p>Through this project, I drastically improved my skills in agile development. I worked on a dynamic team with 6 other students while following SCRUM guidelines.</p>
                    </SectionContainer>
                    <SectionContainer>
                        <h3>Photos</h3>
                        <PhotoMasonry images={images}/>
                    </SectionContainer>
                </ProjectInfoContainer>
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
    )
}

export default FragranceFinder;