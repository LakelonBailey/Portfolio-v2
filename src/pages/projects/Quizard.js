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
import QuizardHomepage from '../../assets/images/projects/quizard/QuizardHomepage.png';
import QuizardLogin from '../../assets/images/projects/quizard/QuizardLogin.png';
import QuizardSignup from '../../assets/images/projects/quizard/QuizardSignup.png';
import QuizardQuizForm from '../../assets/images/projects/quizard/QuizardQuizForm.png';
import QuizardQuizForm2 from '../../assets/images/projects/quizard/QuizardQuizForm2.png';
import QuizardResults from '../../assets/images/projects/quizard/QuizardResults.png';
import QuizardQuizzing from '../../assets/images/projects/quizard/QuizardQuizzing.png';


const quizardImages = [
    {
        src: QuizardHomepage,
        description: (<ImageDescription>Quizard homepage where users can brose quizzes created by other users.</ImageDescription>)
    },
    {
        src: QuizardLogin,
        description: (<ImageDescription>Login page.</ImageDescription>)
    },
    {
        src: QuizardSignup,
        description: (<ImageDescription>Signup page.</ImageDescription>)
    },
    {
        src: QuizardQuizForm,
        description: (<ImageDescription>This is the form that users can use to create quizzes. They are able to add as many questions as they want.</ImageDescription>)
    },
    {
        src: QuizardQuizForm2,
        description: (<ImageDescription>This is the bottom part of the quiz creation form. It is where users can view the questions they have already added to the quiz.</ImageDescription>)
    },
    {
        src: QuizardQuizzing,
        description: (<ImageDescription>This is the user interface for taking a quiz, including all questions and a timer.</ImageDescription>)
    },
    {
        src: QuizardResults,
        description: (<ImageDescription>This is the user interface for viewing the results of a quiz. It allows users to view their answer vs the correct answer.</ImageDescription>)
    }
]

const Quizard = () => {

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

    const images = quizardImages.map((image, i) => (
        <MasonryImage
        image={image}
        handleImageClick={(e) => handleImageClick(e, image)}
        key={i}
        />
    ));

    return (
        <PageBox>
            <Section>
                <ProjectHeader>Quizard</ProjectHeader>
                <ProjectInfoContainer>
                    <SectionContainer>
                        <h3>Links</h3>
                        <p>Github: <span><a target="_blank" rel="noreferrer"  href="https://github.com/NangTuong/Quizard">https://github.com/NangTuong/Quizard</a></span></p>
                    </SectionContainer>
                    <SectionContainer>
                        <h3>Description</h3>
                        <p>This is an application that allows users to create quizzes with an unlimited number of questions and publish these quizzes to be attempted by other users. Users are able to easily browse quizzes made by other users and can take quizzes as many times as they like.</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>My Contribution</h3>
                        <p>I developed all GraphQL queries and the entire backend. I also developed the quizzing functionality (creating quizzes, taking quizzes, and viewing results).</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>Technologies Used</h3>
                        <p><strong>Front-end:</strong> React, GraphQL, Apollo</p>
                        <p><strong>Back-end:</strong> Node.js (Express), MongoDB, Mongoose</p>
                        <p><strong>Hosting:</strong> Heroku (No longer live)</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>What I Learned</h3>
                        <p>This application was my first full-stack application built using the MERN stack. I learned a tremendous amount about this stack and developed confidence in complex front-end frameworks like React as well as NoSQL database types.</p>
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

export default Quizard;