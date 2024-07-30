import React, { useState } from "react";
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
  ImageDescription,
  BackToProjectsLink,
  VideoWrapper,
} from "../../components/ProjectPages";

// Images
import BeeModel from "../../assets/images/projects/blender-bee-swarm/bee.png";
import FlowerPollinatedModel from "../../assets/images/projects/blender-bee-swarm/flower-pollinated.png";
import FlowerUnpollinatedModel from "../../assets/images/projects/blender-bee-swarm/flower-unpollinated.png";
import HiveModel from "../../assets/images/projects/blender-bee-swarm/hive.png";
import TreeModel from "../../assets/images/projects/blender-bee-swarm/tree.png";
import BlenderBeeSwarmVideo from "../../assets/videos/projects/blender-bee-swarm/BeeSwarmFinalRendered.mp4";

const particleSwarmImages = [
  {
    src: BeeModel,
    description: (
      <ImageDescription>
        The model used for bees in the animation.
      </ImageDescription>
    ),
  },
  {
    src: FlowerUnpollinatedModel,
    description: (
      <ImageDescription>
        The model used for flowers in the animation.
      </ImageDescription>
    ),
  },
  {
    src: FlowerPollinatedModel,
    description: (
      <ImageDescription>
        An example of a pollinated flower with a yellow center.
      </ImageDescription>
    ),
  },
  {
    src: HiveModel,
    description: (
      <ImageDescription>
        The model used for the bee hive in the animation.
      </ImageDescription>
    ),
  },
  {
    src: TreeModel,
    description: (
      <ImageDescription>
        The model used for the trees in the animation.
      </ImageDescription>
    ),
  },
];

const BlenderBeeSwarm = ({ setPage }) => {
  const [modalState, setModalState] = useState({
    image: null,
    active: false,
  });

  const handleImageClick = (event, image) => {
    image.width = event.target.offsetWidth;
    if (image.width < 100) {
      image.width = 300;
    }
    image.info = event.target.getBoundingClientRect();

    setModalState({
      image: image,
      active: true,
    });
  };

  const images = particleSwarmImages.map((image, i) => (
    <MasonryImage
      image={image}
      handleImageClick={(e) => handleImageClick(e, image)}
      key={i}
    />
  ));

  return (
    <PageBox>
      <Section>
        <ProjectHeader>Blender Bee Swarm</ProjectHeader>
        <ProjectInfoContainer>
          <SectionContainer>
            <BackToProjectsLink onClick={() => setPage("projects")} href="#">
              &#8592; Back to Projects
            </BackToProjectsLink>
            <h3>Links</h3>
            <p>
              GitHub:{" "}
              <span>
                <a
                  href="https://github.com/LakelonBailey/BlenderBeeSwarm"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/LakelonBailey/BlenderBeeSwarm
                </a>
              </span>
            </p>
            <p>
              Project Presentation:{" "}
              <span>
                <a
                  href="https://www.youtube.com/watch?v=e7f2vRZuIUY&t=998s"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/watch?v=e7f2vRZuIUY&t=998s
                </a>
              </span>
            </p>
          </SectionContainer>
          <SectionContainer>
            <h3>Description</h3>
            <p>
              I completed this project due to my interest in a simple, 3D
              application of Particle Swarm Optimization (PSO). My goal was to
              develop an algorithm that will help the bees find and pollinate
              flowers using only PSO for communication and decision making.
              Along with this, I was interested to see how Python scripting
              could be used to automate iterative animation tasks.
            </p>
            <p>
              For more information on the development process for this project,
              please watch the{" "}
              <a
                href="https://www.youtube.com/watch?v=e7f2vRZuIUY&t=998s"
                target="_blank"
                rel="noreferrer"
              >
                presentation video
              </a>
              !
            </p>
          </SectionContainer>
          <SectionContainer>
            <h3>Final Rendered Animation</h3>
            <VideoWrapper>
              <video
                controls
                autoPlay
                src={BlenderBeeSwarmVideo}
                type="video/mp4"
              />
            </VideoWrapper>
          </SectionContainer>

          <SectionContainer>
            <h3>My Contribution</h3>
            <p>I am the sole contributor on this project.</p>
          </SectionContainer>

          <SectionContainer>
            <h3>Technologies Used</h3>
            <p>
              <strong>Animation:</strong> Blender, Python scripting with Blender
              Python API
            </p>
          </SectionContainer>

          <SectionContainer>
            <h3>What I Learned</h3>
            <p>
              In this project, I learned many of the basics of animation in
              Blender. Along with this, I gained significant practice in 3D
              trigonometry, including equations for rotation, turning radius,
              direction, and more.
            </p>
          </SectionContainer>
          <SectionContainer>
            <h3>Animation Models</h3>
            <PhotoMasonry images={images} />
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
  );
};

export default BlenderBeeSwarm;
