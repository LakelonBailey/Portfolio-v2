import React, { useState } from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import MasonryImage from "./MasonryImage";
import ImageModal from "./ImageModal";

const images = [
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

const PhotoMasonry = () => {
    const [imageModalActive, setImageModalActive] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const handleImageClick = (event, image, imageIndex) => {
      image.width = event.target.offsetWidth;
      if (image.width < 100) {
        image.width = 300;
      }
      image.info = event.target.getBoundingClientRect();
      setModalImage(image);
      setImageModalActive(true);
    }

    return (
      <div>
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} style={{maxWidth: '95%'}}>
          <Masonry columnsCount={3} gutter="10px">
            {images.map((image, i) => (
              <MasonryImage
                key={i}
                image={image}
                alt=""
                handleImageClick={(e) => handleImageClick(e, image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>

        <ImageModal
        isActive={imageModalActive}
        setModalActive={setImageModalActive}
        image={modalImage}
        />
      </div>
    )
};

export default PhotoMasonry;