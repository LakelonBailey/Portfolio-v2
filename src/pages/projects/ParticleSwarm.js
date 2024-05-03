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
import ParticleSwarmHighCognition from "../../assets/images/projects/particle-swarm/particle_swarm_high_cognition.png";
import ParticleSwarmHighSocial from "../../assets/images/projects/particle-swarm/particle_swarm_high_social.png";
import ParticleSwarmCognitionSocialLinePlot from "../../assets/images/projects/particle-swarm/particle_swarm_lineplot_cognition_social.png";
import ParticleSwarmInertiaBoxPot from "../../assets/images/projects/particle-swarm/particle_swarm_boxplot_inertia.png";
import ParticleSwarmVideo from "../../assets/videos/projects/particle-swarm/particle-swarm.mp4";

const particleSwarmImages = [
  {
    src: ParticleSwarmHighCognition,
    description: (
      <ImageDescription>
        This visualization example demonstrates typical behavior observed when
        there is a high ratio of the cognitive weight parameter to the social
        weight parameter. Because the particles care less about one another,
        they are more evenly distributed around the shape. This is the behavior
        we were seeking to accomplish with this project.
      </ImageDescription>
    ),
  },
  {
    src: ParticleSwarmHighSocial,
    description: (
      <ImageDescription>
        This visualization example demonstrates typical behavior observed when
        there is a high ratio of the social weight parameter to the cognitive
        weight parameter. Because the particles care more about one another's
        position, they are more clumped in this example and less evenly
        distributed around the shape.
      </ImageDescription>
    ),
  },
  {
    src: ParticleSwarmCognitionSocialLinePlot,
    description: (
      <ImageDescription>
        This line plot demonstrates the effect of different social and
        cognititive weights on average distance to shape, which was our primary
        metric used to measure parameter impact. As is implied by the
        visualization example images, a higher cognitive weight improves
        performance (reduces average distance to shape) while a higher social
        weight reduces performance.
      </ImageDescription>
    ),
  },
  {
    src: ParticleSwarmInertiaBoxPot,
    description: (
      <ImageDescription>
        This box plot visualizes the effect on performance of differnet inertia
        values. There is a somewhat consistent reduction in performance
        (increase in average distance to shape) as inertia increases.
      </ImageDescription>
    ),
  },
];

const ParticleSwarm = ({ setPage }) => {
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
        <ProjectHeader>Particle Swarm</ProjectHeader>
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
                  href="https://github.com/LakelonBailey/ParticleSwarm"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/LakelonBailey/ParticleSwarm
                </a>
              </span>
            </p>
          </SectionContainer>
          <SectionContainer>
            <h3>Description</h3>
            <p>
              This project was built in order to experiment with using Particle
              Swarm Optimization (PSO) to form shapes using only agent
              communication. This project was my team's final project for CS
              420: Biologically Inspired Computation at the University of
              Tennessee, Knoxville.
            </p>
            <p>
              Particle Swarm Optimization is a "computational method that
              optimizes a problem by iteratively trying to improve a candidate
              solution with regard to a given measure of quality" -{" "}
              <a href="https://en.wikipedia.org/wiki/Particle_swarm_optimization">
                Wikipedia
              </a>
              . We used the concepts of PSO to implement an experimental
              environment that allows us to form shapes using free-moving
              particles.
            </p>
            <p>
              Our methodology involves manipulating three primary parameters:
              social weight, cognititive weight, and inertia. The social weight
              parameter dictates how much each particle listens to the signals
              from other particles. The cognitive weight dictates how much
              importance the particles place on their proximity to the shape.
              Finally, the inertia parameter dictates how much the particles
              care about maintaining their current trajectory.
            </p>
            <p>
              This project can run in three modes: <strong>Regular Mode</strong>
              , <strong>Experimental Mode</strong>, and{" "}
              <strong>Presentation Mode</strong>
            </p>
            <p>
              <strong>Regular Mode</strong> is the basic form of the app. It
              involves an experiment that runs without stopping (no max-steps
              specified) and a small form in the bottom left that allows the
              user to change some parameters and re-run the experiment.
            </p>
            <p>
              <strong>Experimental Mode</strong> will run the experiment many
              times with specific parameter sets in a headless environment (no
              Canvas rendered) in order to improve performance time. This mode
              is meant to generate experimental data in order to analyze the
              effect on outcome of different parameter combinations.
            </p>
            <p>
              <strong>Presentation Mode</strong> simply re-runs the experiment
              endlessly, randomzing the behavioral parameters each time. This
              mode is meant to demonstrate the wide diversity of behavior that
              is achievable through different parameter combinations.
            </p>
          </SectionContainer>
          <SectionContainer>
            <h3>Presentation Mode Video Example</h3>
            <VideoWrapper>
              <video
                controls
                autoPlay
                src={ParticleSwarmVideo}
                type="video/mp4"
              />
            </VideoWrapper>
          </SectionContainer>

          <SectionContainer>
            <h3>My Contribution</h3>
            <p>
              I implemented the algorithm particle swarming behavior. Along with
              this, I implemented <strong>Experimental Mode</strong> and{" "}
              <strong>Presentation Mode</strong>.
            </p>
          </SectionContainer>

          <SectionContainer>
            <h3>Technologies Used</h3>
            <p>
              <strong>Front-end:</strong> HTML, CSS, JavaScript, JavaScript
              Canvas API
            </p>
            <p>
              <strong>Back-end:</strong> Go (simple server to serve frontend
              files and accept JSON POST requests with experimental data)
            </p>
          </SectionContainer>

          <SectionContainer>
            <h3>What I Learned</h3>
            <p>
              In this project, I learned an extensive amount about Particle
              Swarm Optimization and its usefulness in solving a problem of this
              sort. Along with this, I gained further practice with trigonometry
              and the JavaScript Canvas API.
            </p>
          </SectionContainer>
          <SectionContainer>
            <h3>Photos</h3>
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

export default ParticleSwarm;
