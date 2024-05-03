import React from "react";
import styled from "styled-components";

const MasonryVideoWrapper = styled.div`
  width: 100%;
  max-width: 70vw;
  margin: 0 auto;
  display: block;
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    z-index: 800;

    & div {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.75);
    }

    & img {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
  }

  & div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s ease, opacity 0.5s ease;
    border-radius: 15px;
    cursor: pointer;

    & p {
      text-align: center;
      font-weight: 700;
    }
  }

  & img {
    height: 100%;
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    border: 1px solid lightgray;
  }
`;

const MasonryVideo = ({ video, handleImageClick, customHover }) => {
  return (
    <MasonryVideoWrapper>
      <div onClick={handleImageClick}>
        <p>{customHover ? customHover : "View More"}</p>
      </div>
      <video controls autoPlay src={video.src} type="video/mp4" />
    </MasonryVideoWrapper>
  );
};

export default MasonryVideo;
