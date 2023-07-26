import React from "react";
import { createPortal } from "react-dom";
import styled, {keyframes, css} from "styled-components";
import { FaTimes } from "react-icons/fa";

const MODAL_OPEN_DURATION = '.5s';
const imageAnimation = (left, top) => keyframes`
    0% {
        left: ${left}px;
        top: ${top}px;
        transform: translate(0%, 0%) scale(1);
    }
    100% {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(1.25);
    }
`;

const imageBorderAnimation = keyframes`
    0% {
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
    }
    100% {
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
    }
`;

const descriptionDropDownAnimation = keyframes`
    0% {
        max-height: 0;
    }
    100% {
        max-height: 300px;
    }
`
const ImageModalContainer = styled.div`
    opacity: ${props => props.isActive ? '1' : '0'};
    transition: all .3s ease;
    position: fixed;
    z-index: ${props => props.isActive ? '900' : '0'};
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: rgba(0,0,0,0.75);
`;

const ImageModalContent = styled.div`
    background-color: #fefefe;
    position: relative;
    left: 50%;
    top: 10vh;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    animation: ${({imageLeft, imageTop, imageWidth}) => imageAnimation(imageLeft, imageTop, imageWidth)} ${MODAL_OPEN_DURATION} ease forwards;
    border-radius: 15px;
    width: ${({imageWidth}) => imageWidth}px;
    height: fit-content;
    max-width: 90vw;
    margin: 2vh 0;
    padding: 0;
`;

const ModalImage = styled.img`
    width: ${({imageWidth}) => (imageWidth)}px;
    max-width: 100%;
    height: auto;
    border-radius: 15px;
    border-bottom: 1px solid lightgray;
    animation: ${props => props.isActive ? css`${imageBorderAnimation} .3s ${MODAL_OPEN_DURATION} ease forwards` : 'none'};
`;

const DescriptionBox = styled.div`
    width: 100%;
    overflow: hidden;
    max-height: 0;
    width: 100%;
    animation: ${descriptionDropDownAnimation} .3s ${MODAL_OPEN_DURATION} ease-in forwards;
    background-color: lightgray;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`;

const ViewImageLink = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    & a {
        text-decoration: none;
        margin-top: 4px;
        transition: all .3s ease;
        &:hover {
            transform: scale(1.05);
        }
    }
`;

const CloseIcon = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
        transform: scale(1.20);
    }

    & > * {
        background-color: white;
        padding: 4px;
        border-radius: 50%;
    }
`


const ImageModal = ({isActive, setModalState, image, children}) => {
    const handleClose = () => {
        setModalState({
            image: null,
            active: false
        })
    };

    const handleContentClick = (e) => {
        e.stopPropagation();
    };
    return createPortal((
        <ImageModalContainer isActive={isActive} onClick={handleClose}>
        {image && isActive && (
            <ImageModalContent
            onClick={handleContentClick}
            imageLeft={parseInt(image.info.left)}
            imageTop={parseInt(image.info.top)}
            imageWidth={Math.max(image.width, 300)}
            >
                <CloseIcon onClick={handleClose}><FaTimes size={'25px'}/></CloseIcon>
                <ModalImage
                src={image.src}
                imageWidth={Math.max(image.width, 300)}
                isActive={isActive}
                alt="" />
                <DescriptionBox>
                    <ViewImageLink><a href={image.src} target="_blank" rel="noreferrer">View Image</a></ViewImageLink>
                    {children}
                </DescriptionBox>
            </ ImageModalContent>
        )}
        </ImageModalContainer>
    ), document.body);
}

export default ImageModal;