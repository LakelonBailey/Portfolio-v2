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
    ImageDescription
} from '../../components/ProjectPages';

// Images
import MemebookFeed from '../../assets/images/projects/memebook/MemebookFeed.png';
import MemebookCreateMeme from '../../assets/images/projects/memebook/MemebookCreateMeme.png';
import MemebookFriendSearch from '../../assets/images/projects/memebook/MemebookFriendSearch.png';
import MemebookMessaging from '../../assets/images/projects/memebook/MemebookMessaging.png';
import MemebookMessaging2 from '../../assets/images/projects/memebook/MemebookMessaging2.png';
import MemebookViewMeme from '../../assets/images/projects/memebook/MemebookViewMeme.png';
import MemebookProfile from '../../assets/images/projects/memebook/MemebookProfile.png';
import MemebookFriendRequests from '../../assets/images/projects/memebook/MemebookFriendRequests.png';
import MemebookOtherProfile from '../../assets/images/projects/memebook/MemebookOtherProfile.png';
import MemebookFriendsList from '../../assets/images/projects/memebook/MemebookFriendsList.png';


const memebookImages = [
    {
        src: MemebookFeed,
        description: (<ImageDescription>This is the main page of Memebook. It is where users are able to browse popular public memes or memes made by their friends</ImageDescription>)
    },
    {
        src: MemebookProfile,
        description: (<ImageDescription>This is the profile page. It is where users are able to view their memes and the memes they've liked as well as adjust their settings and friendships.</ImageDescription>)
    },
    {
        src: MemebookOtherProfile,
        description: (<ImageDescription>Users are able to view the profile of other users and adjust their friendship status with those users as well as view their memes.</ImageDescription>)
    },
    {
        src: MemebookFriendRequests,
        description: (<ImageDescription>Users are able to view a list of all friend requests they have recieved.</ImageDescription>)
    },
    {
        src: MemebookFriendsList,
        description: (<ImageDescription>Users are able to view a list of all of their current friends and adjust their friendship status with those friends.</ImageDescription>)
    },
    {
        src: MemebookViewMeme,
        description: (<ImageDescription>Users are able to view memes and comment on these memes or view other comments.</ImageDescription>)
    },
    {
        src: MemebookCreateMeme,
        description: (<ImageDescription>In this page, users are able to create their own memes by choosing a template and setting the bottom and top text.</ImageDescription>)
    },
    {
        src: MemebookFriendSearch,
        description: (<ImageDescription>Users are able to search for other users as well as adjust their friendship status with those users.</ImageDescription>)
    },
    {
        src: MemebookMessaging,
        description: (<ImageDescription>Users are able to live-message their friends as well as view live read receipts and typing indicators.</ImageDescription>)
    },
    {
        src: MemebookMessaging2,
        description: (<ImageDescription>Users are also able to see indications that they have unread messages from other users.</ImageDescription>)
    }
]

const Memebook = () => {

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

    const images = memebookImages.map((image, i) => (
        <MasonryImage
        image={image}
        handleImageClick={(e) => handleImageClick(e, image)}
        key={i}
        />
    ));

    return (
        <PageBox>
            <Section>
                <ProjectHeader>Memebook</ProjectHeader>
                <ProjectInfoContainer>
                    <SectionContainer>
                        <h3>Links</h3>
                        <p>GitHub: <span><a href="https://github.com/LakelonBailey/Memebook" target="_blank" rel="noreferrer">https://github.com/LakelonBailey/Memebook</a></span></p>
                    </SectionContainer>
                    <SectionContainer>
                        <h3>Description</h3>
                        <p>Memebook is a full-stack social media application for memes. This application includes many of the most basic aspects of a social media, including friends, likes, comments, messaging, and even a meme popularity algorithm.</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>My Contribution</h3>
                        <p>I developed the entirety of this application except for the C++ algorithm used to sort the memes and the friends list on user profiles.</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>Technologies Used</h3>
                        <p><strong>Front-end:</strong> HTML, CSS, JavaScript (JQuery), Bulma CSS Framework</p>
                        <p><strong>Back-end:</strong> Python (Django), PostgreSQL, C++ (meme popularity sorting algorithm)</p>
                        <p><strong>Hosting:</strong> Heroku (No longer live)</p>
                        <p><strong>Image Storage:</strong> When it was live, this application used AWS S3 Bucket for media file storage.</p>
                    </SectionContainer>

                    <SectionContainer>
                        <h3>What I Learned</h3>
                        <p>My primary intent with this application was to learn how to use AWS S3 Buckets for image storage as well as WebSockets for messaging. I succeeded at both of these goals. I successfully configured the application to use an AWS S3 Bucket on production and developed a messaging service that uses WebSockets to deliver live results on both ends of the messaging chat.</p>
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

export default Memebook;