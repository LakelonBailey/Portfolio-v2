import styled from "styled-components";

const ProjectHeader = styled.h2`
    width: 100%;
    text-align: center;
    font-weight: 500;
    padding: 12px 0;
    border-bottom: 2px solid var(--theme-1);
    background-color: rgba(var(--theme-2-rgb), .25);
    margin: 0;
`;

const ProjectInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;


const SectionContainer = styled.div`
    padding: 20px;
    border: 1px solid #ddd; // Light border
    border-radius: 5px; // Rounded corners
    margin-bottom: 20px; // Space between sections
    background-color: #fff; // White background
    h3 {
        color: #333; // Dark text
        margin-bottom: 10px; // Space under header
    }
    p {
        color: #666; // Lighter text
    }
`;

const ImageDescription = styled.p`
    margin: 12px;
`;

export {
    ProjectHeader,
    ProjectInfoContainer,
    SectionContainer,
    ImageDescription
}