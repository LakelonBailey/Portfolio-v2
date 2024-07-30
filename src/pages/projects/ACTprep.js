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
import accountabilitySheetImage from "../../assets/images/projects/actprep/AccountabilitySheet.png";
import masterSheetImage from "../../assets/images/projects/actprep/MasterSheet.png";
import studentDashboardImage from "../../assets/images/projects/actprep/StudentDashboard.png";
import studentTestAnalysisImage from "../../assets/images/projects/actprep/StudentTestAnalysis.png";
import parentDashboardImage from "../../assets/images/projects/actprep/ParentDashboard.png";
import testTakingAppImage from "../../assets/images/projects/actprep/TestTakingApp.png";
import enrollmentAppImage from "../../assets/images/projects/actprep/EnrollmentApp.png";
import curriculumBuilderImage from "../../assets/images/projects/actprep/CurriculumBuilder.png";

const actprepImages = [
  {
    src: curriculumBuilderImage,
    description: (
      <ImageDescription>
        This is the new Curriculum Builder, which is part of the revamped
        React/Material UI admin application. This page allows employees to build
        comprehensive programs for students with daily instructions on how to
        progress through their ACT prep material.
      </ImageDescription>
    ),
  },
  {
    src: accountabilitySheetImage,
    description: (
      <ImageDescription>
        This is the Accountability Sheet, which coaches use to closely monitor
        students' across many different metrics to look for ways to help those
        students succeed.
      </ImageDescription>
    ),
  },
  {
    src: masterSheetImage,
    description: (
      <ImageDescription>
        The Master Sheet is used by coaches to determine which team won the
        competition each week. It involves a complex calculation of each team's
        performance across several metrics.
      </ImageDescription>
    ),
  },
  {
    src: studentDashboardImage,
    description: (
      <ImageDescription>
        This is the Student Dashboard. It tells students exactly what to do each
        week, allows them to submit all of their stats/scores/etc., and reminds
        them of their overall goals.
      </ImageDescription>
    ),
  },
  {
    src: studentTestAnalysisImage,
    description: (
      <ImageDescription>
        This page provides students with an in-depth analysis of many different
        statistics for each test they take using the in-app answer sheet. For
        each question, they are shown their result for that question, their
        performance on compared to other students, the time spent on that
        question, and more.
      </ImageDescription>
    ),
  },
  {
    src: parentDashboardImage,
    description: (
      <ImageDescription>
        This is the Parent Dashboard. It provides parents a detailed
        representation of the effort their child is putting into the program
        compared to other students as well as a reflection of their student's
        performance.
      </ImageDescription>
    ),
  },
  {
    src: testTakingAppImage,
    description: (
      <ImageDescription>
        This is the test taking app. It is our custom answer sheet that
        resembles a standardized testing bubble sheet. By using this app to take
        tests, students are provided with far more information on their
        performance, allowing students to further learn from each test they
        take.
      </ImageDescription>
    ),
  },
  {
    src: enrollmentAppImage,
    description: (
      <ImageDescription>
        This is the student enrollment app. It onboards students to many
        different aspects of the program and gathers the necessary information
        from them.
      </ImageDescription>
    ),
  },
];

const ACTPrep = ({ setPage }) => {
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

  const images = actprepImages.map((image, i) => (
    <MasonryImage
      image={image}
      handleImageClick={(e) => handleImageClick(e, image)}
      key={i}
    />
  ));

  return (
    <PageBox>
      <Section>
        <ProjectHeader>ACTprep.com Web Application</ProjectHeader>
        <ProjectInfoContainer>
          <SectionContainer>
            <BackToProjectsLink onClick={() => setPage("projects")} href="#">
              &#8592; Back to Projects
            </BackToProjectsLink>
            <h3>Description</h3>
            <p>
              <a href="https://actprep.com" style={{ fontWeight: "bold" }}>
                ACTprep.com
              </a>{" "}
              is a successful Knoxville-based ACT tutoring company. This
              application facilitates all internal data collection, calculation,
              and display for ACTprep.com. It handles over 60 daily users,
              including coaches, students, parents, enrollment coordinators, and
              more.
            </p>
            <p>
              This application is highly interactive, involving complex user
              interfaces and functionalities for all types of users. Since this
              application became the primary technology used by ACTprep.com, all
              internal processes have been streamlined, drastically improving
              the overall scalability of the company.
            </p>
            <p>
              Within the app are several different sub-apps. These include, but
              are not limited to, a coaching app, parent app, student app,
              enrollment app, and enrollment coordination app.
            </p>
            <p>
              Here is a non-comprehensive list of the general improvements
              provided by this application:
            </p>
            <ul>
              <li>
                Students are now text-message reminded automatically to input
                their stats for the day rather than requiring a coach to message
                them.
              </li>
              <li>
                Using the Ticket Tailor API, signups from Ticket Tailor are
                automatically recieved by the application, processed, and used
                to create student/parent accounts.
              </li>
              <li>
                Students are now able to input their own data instead of needing
                to message their data to be hand-entered by coaches in
                spreadsheets.
              </li>
              <li>
                Live and fast calculations and statistics are now available to
                students and coaches at all times.
              </li>
              <li>
                Parents are able to monitor their students' progress across
                several metrics at all times.
              </li>
              <li>
                Enrollment coordinators are able to easily monitor new
                students'/parents' progress throughout the onboarding process.
              </li>
              <li>
                Coaches are able to build dynamic daily schedules for the
                students within the app.
              </li>
            </ul>
            <br />
            <div
              style={{
                padding: "12px",
                borderRadius: "10px",
                backgroundColor: "rgba(var(--theme-2-rgb), .25)",
              }}
            >
              <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
                "The application developed by Lake Bailey has been nothing short
                of transformative for our organization. It has ushered us into
                the digital age by automating tedious tasks, freeing up
                resources that we've been able to redirect towards areas of
                higher impact. More than just a tool, it has revolutionized our
                curriculum by digitizing it, leading to substantial savings in
                printing and labor costs that amount to tens of thousands of
                dollars annually.
              </p>
              <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
                Furthermore, it has enhanced our coaching capacity, nearly
                doubling the number of students each coach can effectively
                mentor. But perhaps its most significant contribution is how it
                has become the backbone of our operations, seamlessly managing
                and streamlining our processes. In essence, it is the engine
                that now drives our entire company."
              </p>
              <p> - Bobby Nicholson, CEO, ACTprep.com, Inc.</p>
            </div>
          </SectionContainer>

          <SectionContainer>
            <h3>My Contribution</h3>
            <p>
              I have build over 95% of all software for ACTprep.com. Currently,
              the primary contributors on this project are myself and
              ACTprep.com's software development intern,{" "}
              <a href="https://www.linkedin.com/in/trenton-wakham-718008277/">
                Trent Wakham
              </a>
              .
            </p>
          </SectionContainer>

          <SectionContainer>
            <h3>Technologies Used</h3>
            <p>
              <strong>Front-end:</strong> HTML, CSS, JavaScript (JQuery), Bulma
              CSS Framework
            </p>
            <p>
              <strong>Back-end:</strong> Python (Django), PostgreSQL
            </p>
            <p>
              <strong>Hosting:</strong> Digital Ocean
            </p>
          </SectionContainer>

          <SectionContainer>
            <h3>What I Learned</h3>
            <p>
              This project has laid the groundwork for my sofware engineering
              career. It has exposed me to a tremendous number of real-world
              software engineering principles while giving me the opportunity to
              boost my skills and positively impact others through software
              development on a daily basis. This project and its effects on
              ACTprep.com are my proudest accomplishment.
            </p>
          </SectionContainer>
          <SectionContainer>
            <h3>My Favorite Features</h3>
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

export default ACTPrep;
