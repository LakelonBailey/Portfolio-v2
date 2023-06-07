import React, {useState} from "react";
import PageBox from "../components/PageBox";
import PhotoMasonry from "../components/PhotoMasonry";
import MasonryImage from "../components/MasonryImage";
import ImageModal from "../components/ImageModal";

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
            <PhotoMasonry
            images={images}
            />
            <ImageModal
            isActive={imageModalActive}
            setModalActive={setImageModalActive}
            image={modalImage}
            />
        </PageBox>
    )
}

export default About;
