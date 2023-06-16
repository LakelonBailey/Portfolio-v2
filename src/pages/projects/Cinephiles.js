import React, {useState} from "react";
import PageBox from "../../components/PageBox";
import styled from "styled-components";
import Section, {SectionHeader} from "../../components/Section";
import PhotoMasonry from "../../components/PhotoMasonry";
import MasonryImage from "../../components/MasonryImage";
import ImageModal from "../../components/ImageModal";
import Footer from "../../components/Footer";

import {
    ProjectHeader,
    ProjectInfoContainer,
    SectionContainer,
    ImageDescription
} from '../../components/ProjectPages';

// Images
import cinephilesHomepageImage from '../../assets/images/projects/cinephiles/CinephilesHomepage.png';
import cinephilesSearchImage1 from '../../assets/images/projects/cinephiles/CinephilesSearch.png';
import cinephilesSearchImage2 from '../../assets/images/projects/cinephiles/CinephilesSearch2.png';
import cinephilesSearchImage3 from '../../assets/images/projects/cinephiles/CinephilesSearch3.png';


const cinephilesImages = [
    {
        src: cinephilesHomepageImage,
        description: (<ImageDescription>This is the homepage of the application where users are able to view a list of movies that have been added to watchlists, ranked by the number of watchlists they have been added to.</ImageDescription>)
    },
    {
        src: cinephilesSearchImage1,
        description: (<ImageDescription>This is the search page where users can search for books to add to their watchlist using the IMDB API.</ImageDescription>)
    },
    {
        src: cinephilesSearchImage2,
        description: (<ImageDescription>Additional search page image.</ImageDescription>)
    },
    {
        src: cinephilesSearchImage3,
        description: (<ImageDescription>Additional search page image.</ImageDescription>)
    },
]

const Cinephiles = () => {

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

    const images = cinephilesImages.map((image, i) => (
        <MasonryImage
        image={image}
        handleImageClick={(e) => handleImageClick(e, image)}
        key={i}
        />
    ));

    return (
        <PageBox>
            <Section>
                <ProjectHeader>Cinephiles</ProjectHeader>
                <ProjectInfoContainer>
                    <SectionContainer>
                        <h3>Links</h3>
                        <p>Github: <span><a target="_blank" rel="noreferrer" href="https://github.com/LakelonBailey/Cinephiles">https://github.com/LakelonBailey/Cinephiles</a></span></p>
                    </SectionContainer>
                    <SectionContainer>
                        <h3>Description</h3>
                        <p>Cinephiles is a website where all movie lovers can go to find their next film to watch for movie night. Plan on watching a movie but don't have the time right now? No problem! Just save the movie to your watchlist and come back later to peruse all the movies you wanted to see. From top 250 movies, most popular movies, to finding movies other users are interested in based off of their watchlist, Cinephiles has it all!</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>My Contribution</h3>
                        <p>I designed and coded the entire backend for this app and the majority of the frontend and IMDB API interaction.</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>Technologies Used</h3>
                        <p><strong>Front-end:</strong> HTML, CSS, JavaScript, Bulma CSS Framework, IMDB API</p>
                        <p><strong>Back-end:</strong> Node.js (Express), MySQL</p>
                        <p><strong>Hosting:</strong> Heroku (No longer live)</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>What I Learned</h3>
                        <p>This application was one of the first full-stack applications I implemented using an Express backend. It taught me the fundamental aspects of an application with an Express backend and the advantages/disadvantages of this framework.</p>
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

export default Cinephiles;