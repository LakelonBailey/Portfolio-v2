import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import styled from "styled-components";


const Wrapper = styled.div`
  width: 95%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  & > div {
    padding: 0;
    margin: 0;
  }
`
const PhotoMasonry = ({images}) => {
    return (
      <Wrapper>
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} style={{maxWidth: '95%'}}>
          <Masonry columnsCount={3} gutter="10px">
            {images.map((image, i) => (image))}
          </Masonry>
        </ResponsiveMasonry>
      </Wrapper>
    )
};

export default PhotoMasonry;