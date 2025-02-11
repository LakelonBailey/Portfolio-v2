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
} from "../../components/ProjectPages";

// Images
import mapImage from "../../assets/images/projects/uwgm/map.png";
import mapOrganizationsImage from "../../assets/images/projects/uwgm/map_with_orgs.png";
import organizationsImage from "../../assets/images/projects/uwgm/organizations.png";
import importingImage from "../../assets/images/projects/uwgm/importing.png";
import analyticsImage from "../../assets/images/projects/uwgm/analytics.png";
import teamPic from "../../assets/images/projects/uwgm/team_pic.png";

const uwgmImages = [
  {
    src: teamPic,
    description: (
      <ImageDescription>
        Here is a picture of the entire United Way Grant Management development
        team! Pictured from left to right is{" "}
        <a
          href="https://github.com/ZacPerry-dev"
          target="_blank"
          rel="noreferrer"
        >
          Zac Perry (Developer)
        </a>
        ,{" "}
        <a
          href="https://github.com/anantsahoo"
          target="_blank"
          rel="noreferrer"
        >
          Anant Sahoo (Developer)
        </a>
        ,{" "}
        <a href="https://github.com/arward" target="_blank" rel="noreferrer">
          Alex Warden (Developer)
        </a>
        ,{" "}
        <a
          href="https://github.com/TrentWakham"
          target="_blank"
          rel="noreferrer"
        >
          Trent Wakham (Developer)
        </a>
        ,{" "}
        <a href="https://github.com/maddyyu" target="_blank" rel="noreferrer">
          Maddy Yu (Developer)
        </a>
        ,{" "}
        <a href="https://github.com/kvnguo" target="_blank" rel="noreferrer">
          Kevin Guo (Developer)
        </a>
        , Me (Technical Lead), and{" "}
        <a
          href="https://github.com/Nayana278820"
          target="_blank"
          rel="noreferrer"
        >
          Srinayana Patil (Product Manager)
        </a>
        . This picture was taken during our final product demo that we presented
        to the entired UTK Chapter of Hack4Impact.
      </ImageDescription>
    ),
  },
  {
    src: mapImage,
    description: (
      <ImageDescription>
        This is the home page of the app. This page gives users the ability to
        view how each zipcode region of Knoxville is performing in comparison to
        others when it comes to total clients served.
      </ImageDescription>
    ),
  },
  {
    src: mapOrganizationsImage,
    description: (
      <ImageDescription>
        This photo demonstrates how users are able to view the organizations and
        projects present in a zipcode region.
      </ImageDescription>
    ),
  },
  {
    src: organizationsImage,
    description: (
      <ImageDescription>
        This is the Organizations page. This page gives users the ability to
        search for and view organizations and their projects.
      </ImageDescription>
    ),
  },
  {
    src: importingImage,
    description: (
      <ImageDescription>
        The is the Import page. This page gives users the ability to import
        reports based on the required report CSV schema.
      </ImageDescription>
    ),
  },
  {
    src: analyticsImage,
    description: (
      <ImageDescription>
        This is the Analytics page, which is the core of the application. It
        gives users a variety of insights into how the selected Organizations
        and Projects are performing based on a wide range of metrics.
        <br />
        <br />
        <span style={{ fontStyle: "italic" }}>
          DISCLAIMER: All data for this page was randomly generated and is not
          real-world data.
        </span>
      </ImageDescription>
    ),
  },
];

const UWGM = ({ setPage, renderImages }) => {
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

  const images = uwgmImages.map((image, i) => (
    <MasonryImage
      image={image}
      handleImageClick={(e) => handleImageClick(e, image)}
      key={i}
    />
  ));

  return (
    <PageBox>
      <Section>
        <ProjectHeader>United Way Grant Management</ProjectHeader>
        <ProjectInfoContainer>
          <SectionContainer>
            <BackToProjectsLink onClick={() => setPage("projects")} href="#">
              &#8592; Back to Projects
            </BackToProjectsLink>
            <h3>Description</h3>
            <p>
              I became a part of this project through the{" "}
              <a
                href="https://utk.hack4impact.org/"
                style={{ fontWeight: "bold" }}
              >
                UTK Chapter of Hack4Impact
              </a>
              . Hack4Impact is a nationwide non-profit organization focused on
              bringing university students together to engineer powerful
              software solutions for social good. I was fortunate to become a
              part of this organization in May of 2023. Since then, I have
              served as the Technical Lead for the United Way Grant Management
              project.
            </p>
            <p>
              <a href="https://uwgk.org/" style={{ fontWeight: "bold" }}>
                United Way of Greater Knoxville
              </a>{" "}
              is a highly impactful non-profit organization in Knoxville focused
              on driving widespread positive change in the Greater Knoxville
              community. This organization is part of United Way, which is the
              world's largest privately-funded nonprofit.
            </p>
            <p>
              The United Way Grant Management project is a data visualization
              project focused on providing valuable locational and analytical
              insights on the many Knoxville-based organizations that are funded
              by United Way of Greater Knoxville.
            </p>
            <p>
              The United Way of Greater Knoxville employees and volunteers are
              incredibly hard-working and wonderful people, and it was an
              extreme priviledge to have the opportunity to lead the development
              of a project that could benefit their efforts tremendously in the
              future and further contribute to social good in the Greater
              Knoxville area.
            </p>
            <br />
            <div
              style={{
                padding: "12px",
                borderRadius: "10px",
                backgroundColor: "rgba(var(--theme-2-rgb), .25)",
              }}
            >
              <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
                "At United Way of Greater Knoxville, we bring people together to
                create lasting change in our Knoxville-Knox County community .
                We are a supporter, funder, convener, innovator, and advocate.
                We believe that to create lasting change, we need to
                #UNITE4CHANGE. We are bringing together community members,
                advocates, subject matter experts, and leaders to create better
                systems for our neighbors in areas such as food, economic
                mobility education, and housing.
              </p>
              <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
                We are going beyond the traditional United Way model as more
                than just a nonprofit funder. We are working in advocacy, both
                locally and across our state. We are a volunteer hub, matching
                community members ready to serve with other area nonprofits in
                need of support. We are a nonprofit capacity builder, providing
                training, relationship building, consulting services, and more
                to partner agencies."
              </p>
              <p>
                {" "}
                -{" "}
                <a href="https://uwgk.org/">
                  United Way of Greater Knoxville Website
                </a>
              </p>
            </div>
          </SectionContainer>

          <SectionContainer>
            <h3>My Contribution</h3>
            <p>
              I served as the Technical Lead for this project. Here were some of
              my contributions to this project:
              <ul>
                <li>
                  Held weekly web development crash courses to help the
                  developers build skills in general web devepment concepts and
                  learn the project's tech stack
                </li>
                <li>
                  Implemented professional programming standards throughout the
                  project and led an agile development process.
                </li>
                <li>
                  Conducted weekly code reviews to make sure development
                  progressed smoothly and programming conventions were kept
                  consistent and professional across the project.
                </li>
                <li>
                  Contributed sigificantly to developing the project, including
                  major contributions on the Analytics page and constructing the
                  backend API.
                </li>
                <li>
                  Led the design of the application's user interface and
                  organization.
                </li>
                <li>Designed the database structure for the application.</li>
              </ul>
            </p>
          </SectionContainer>

          <SectionContainer>
            <h3>Technologies Used</h3>
            <p>
              <strong>Front-end:</strong> React (Next.js), Material UI, ChartJS,
              React Leaflet
            </p>
            <p>
              <strong>Back-end:</strong> JavaScript (Next.js), MongoDB
            </p>
            <p>
              <strong>Hosting:</strong> Vercel
            </p>
          </SectionContainer>

          <SectionContainer>
            <h3>What I Learned</h3>
            <p>
              In this role, I further developed highly valuable leadership
              skills that will benefit me greatly as I progress into a career in
              technology. This is my most legitimate experience thus far in
              leading a technical team of several people. I had the opprtunity
              to positively contribute to the skills of my team's developers
              while satisfying my passion for leadership and technology. It was
              incredible to see all that can be accomplished by a team of
              devoted students who are eager to deliver an impactful software
              solution.
            </p>
            <p>
              Furthermore, this project contributed to my improved understanding
              of React, Next.js, professional development principles, system
              design, and more!
            </p>
          </SectionContainer>
          <SectionContainer>
            <h3>Photos</h3>
            <PhotoMasonry images={images} renderImages={renderImages} />
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

export default UWGM;
