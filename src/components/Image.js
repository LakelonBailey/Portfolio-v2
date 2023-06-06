import React from "react";
import styled from "styled-components";

const ImageBox = styled.div`
    width: 200px;
    height: ${Math.floor(Math.random() * (600 - 300) + 300)}px;
    background-color: green;
    border-radius: 5%;
    border: 1px solid red;
`;

const Image = () => {
    return (
        <ImageBox></ImageBox>
    )
};

export default Image;