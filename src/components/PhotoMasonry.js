import React, { useState } from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import MasonryImage from "./MasonryImage";
import ImageModal from "./ImageModal";

const PhotoMasonry = ({images}) => {
    return (
      <div>
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} style={{maxWidth: '95%'}}>
          <Masonry columnsCount={3} gutter="10px">
            {images.map((image, i) => (image))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    )
};

export default PhotoMasonry;