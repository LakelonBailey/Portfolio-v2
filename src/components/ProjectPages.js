import styled from "styled-components";

const ProjectHeader = styled.h2`
  width: 100%;
  text-align: center;
  font-weight: 500;
  padding: 12px 0;
  border-bottom: 2px solid var(--theme-1);
  background-color: rgba(var(--theme-2-rgb), 0.25);
  margin: 0;
`;

const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackToProjectsLink = styled.a`
  text-decoration: none;
`;

const SectionContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: #fff;
  h3 {
    color: #333;
    margin-bottom: 10px;
  }
`;

const ImageDescription = styled.p`
  margin: 12px;
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  & video {
    width: 75%;
    max-width: 1000px;
  }
`;

export {
  ProjectHeader,
  ProjectInfoContainer,
  SectionContainer,
  ImageDescription,
  BackToProjectsLink,
  VideoWrapper,
};
