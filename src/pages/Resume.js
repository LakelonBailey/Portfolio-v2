import React from "react";
import PageBox from "../components/PageBox";
import styled from "styled-components";
import Section, {SectionHeader} from "../components/Section";
import ProgressBar from "../components/ProgressBar";
import workExperiences from "../data/workExperiences";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import UTKLogo from '../assets/images/utk_logo.png';
import VanderbiltLogo from '../assets/images/vanderbilt_logo.jpeg';
import BootcampCertificate from '../assets/files/lakelon_bailey_bootcamp_certificate.pdf';

import {
    FaCode,
    FaUncharted,
    FaCheck,
    FaBolt,
    FaLightbulb

} from 'react-icons/fa';
import Footer from "../components/Footer";

const SkillSectionHeader = styled.h2`
    display: flex;
    align-items: center;
    margin: 0;
    margin-top: 12px;
    font-size: 24px;
    font-weight: normal;
    border-bottom: 2px solid var(--theme-1);
    padding-bottom: 4px;
    padding-left: 8px;
    & span:not(:last-child) {
        margin-right: 8px;
    }
`;

const WorkExperienceCompany = styled.h3`
    display: flex;
    align-items: center;
    margin: 0;
    margin-top: 12px;
    font-size: 20px;
    font-weight: 600;
`;

const PositionsList = styled.ul`
    list-style-type: none;
    padding: 0;
`

const Position = styled.li`
    height: fit-content;
    text-align: left;
    padding-bottom: 12px;
    &:not(:first-child) {
        padding-top: 8px;
    }
    &:not(:last-child) {
        border-bottom: 1px solid var(--theme-2);
    }
`;

const PositionTitle = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    padding: 0;
    border-bottom: 1px solid rgba(0, 0, 0, .15);
    padding-bottom: 4px;

    & span:first-child {
        width: 50%;
        padding-right: 6px;
        border-right: 1px solid rgba(0, 0, 0, .15);;
    }
    & span:last-child {
        width: 50%;
        text-align: right;
        padding-left: 6px;
    }
`;

const PositionDescription = styled.ul`
    list-style-type: disc;
    margin-left: 0;
    padding-left: 12px;
    & li {
        font-size: 12px;

        &:not(:last-child) {
            margin-bottom: 6px;
        }
    }
`

const SectionList = styled.ul`
    list-style-type: none;
    text-align: left;
    padding-right: 16px;
    & li {
        height: fit-content;
    }
`

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px;
`;

const SubSection = styled.div`
  margin: 0 20px;
  text-align: center;
  min-width: 350px;
  flex: 1;

  @media (max-width: 500px) {
    min-width: 300px;
  }
`;

const WorkExperienceContainer = styled.div`
    padding: 20px;
`;

const WorkExperienceCard = styled.div`
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background-color: rgba(var(--theme-2-rgb), .3);
    transition: 0.3s;
    // border-radius: 5px;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    & > div {
        padding: 20px;
    }
`;

const SoftwareList = styled.li`
  margin-right: 25px;
  & p:first-child {
    font-weight: 600;
    width: 100%;
    padding-bottom: 6px;
    border-bottom: 1px solid var(--theme-2)
  }

  & p:last-child {
    margin-left: 12px;
  }
`;

const TechniqueListItem = styled.li`

  margin: 12px 0;

  & span:first-child {
    margin-right: 8px;
  }
`;

const EducationCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
    padding: 16px;
    border: 1px solid var(--theme-2);
    border-radius: 8px;
    margin: 0 24px;
    margin-bottom: 16px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: box-shadow .3s;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

const UniversityLogo = styled.img`
    width: 100px;
    height: 100px;
`;

const EducationDetails = styled.div`
    text-align: left;
    margin-left: 16px;
`;

const UniversityTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
`;

const DegreeTitle = styled.h4`
    font-size: 16px;
    font-weight: 400;
`;

const EducationYear = styled.p`
    font-size: 14px;
    font-weight: 300;
`;

const CertificateLink = styled.a`
    color: #007BFF; // Change this to your preferred link color
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;


const Resume = () => {
    return (
        <PageBox>
            <Section>
                <SectionHeader>Work Experience</SectionHeader>
                <WorkExperienceContainer>
                    <ResponsiveMasonry columnsCountBreakPoints={{500: 1, 900: 2}} style={{
                        width: '95%'
                    }}>
                        <Masonry columnsCount={2} gutter="12px">
                            {workExperiences.map((workExperience, i) => (
                            <WorkExperienceCard key={i}>
                                <div>
                                    <WorkExperienceCompany>{workExperience.company}</WorkExperienceCompany>
                                    <PositionsList>
                                        {workExperience.positions.map((position, j) => (
                                        <Position key={j}>
                                            <PositionTitle>
                                                <span>{position.title}</span>
                                                <span>{position.duration}</span>
                                            </PositionTitle>
                                            <PositionDescription>
                                                {position.notes.map((note, k) => (
                                                    <li key={k}>{note}</li>
                                                ))}
                                            </PositionDescription>
                                        </Position>
                                        ))}
                                    </PositionsList>
                                </div>
                            </WorkExperienceCard>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </WorkExperienceContainer>
            </Section>
            <Section>
                <SectionHeader>Skills</SectionHeader>
                <Container>
                    <SubSection>
                        <SkillSectionHeader><span><FaCode size={'20px'}/></span><span>Programming Languages</span></SkillSectionHeader>
                        <SectionList>
                            <li>
                                <p>Python</p>
                                <ProgressBar percentage={'90'}/>
                            </li>
                            <li>
                                <p>C/C++</p>
                                <ProgressBar percentage={'75'}/>
                            </li>
                            <li>
                                <p>Java</p>
                                <ProgressBar percentage={'50'}/>
                            </li>
                            <li>
                                <p>HTML/CSS</p>
                                <ProgressBar percentage={'90'}/>
                            </li>
                            <li>
                                <p>JavaScript</p>
                                <ProgressBar percentage={'80'}/>
                            </li>
                            <li>
                                <p>SQL</p>
                                <ProgressBar percentage={'60'}/>
                            </li>
                        </SectionList>
                    </SubSection>
                    <SubSection>
                        <SkillSectionHeader><span><FaUncharted size={'20px'}/></span><span>Softwares/Frameworks</span></SkillSectionHeader>
                        <SectionList>
                            <SoftwareList>
                                <p>Front-end</p>
                                <p>React, Vue, Bootstrap, Bulma, Apollo</p>
                            </SoftwareList>
                            <SoftwareList>
                                <p>Back-end</p>
                                <p>Django, Flask, Express, Spring, Sequelize, Mongoose, Prisma, NodeJS, REST APIs</p>
                            </SoftwareList>
                            <SoftwareList>
                                <p>Data</p>
                                <p>GraphQL, MongoDB, MySQL, PostgreSQL, SQLite, Pandas, Numpy</p>
                            </SoftwareList>
                            <SoftwareList>
                                <p>Cloud</p>
                                <p>AWS S3, Google Cloud, Digital Ocean, Heroku</p>
                            </SoftwareList>
                        </SectionList>
                    </SubSection>
                    <SubSection>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap'
                        }}>
                            <SubSection>
                                <SkillSectionHeader><span><FaBolt size={'20px'}/></span><span>Techniques</span></SkillSectionHeader>
                                <SectionList>
                                    <TechniqueListItem>
                                        <span><FaCheck color="var(--theme-1)" /></span><span>Object-oriented Programming</span>
                                    </TechniqueListItem>
                                    <TechniqueListItem>
                                        <span><FaCheck color="var(--theme-1)" /></span><span>Functional Programming</span>
                                    </TechniqueListItem>
                                    <TechniqueListItem>
                                        <span><FaCheck color="var(--theme-1)" /></span><span>Test-driven Development</span>
                                    </TechniqueListItem>
                                    <TechniqueListItem>
                                        <span><FaCheck color="var(--theme-1)" /></span><span>Agile Development</span>
                                    </TechniqueListItem>
                                    <TechniqueListItem>
                                        <span><FaCheck color="var(--theme-1)" /></span><span>Full-stack Development</span>
                                    </TechniqueListItem>
                                </SectionList>
                            </SubSection>
                            <SubSection>
                                <SkillSectionHeader><span><FaLightbulb size={'20px'}/></span><span>Soft Skills</span></SkillSectionHeader>
                                <SectionList>
                                    <TechniqueListItem>
                                        <span><FaCheck color="var(--theme-1)" /></span><span>Problem-solving</span>
                                    </TechniqueListItem>
                                    <TechniqueListItem>
                                        <span><FaCheck color="var(--theme-1)" /></span><span>Versitility/Adaptibility</span>
                                    </TechniqueListItem>
                                    <TechniqueListItem>
                                        <span><FaCheck color="var(--theme-1)" /></span><span>Self-teaching/self-starting</span>
                                    </TechniqueListItem>
                                    <TechniqueListItem>
                                        <span><FaCheck color="var(--theme-1)" /></span><span>Leadership and communication</span>
                                    </TechniqueListItem>
                                    <TechniqueListItem>
                                        <span><FaCheck color="var(--theme-1)" /></span><span>Project management</span>
                                    </TechniqueListItem>
                                    <TechniqueListItem>
                                        <span><FaCheck color="var(--theme-1)" /></span><span>Teaching/Coaching</span>
                                    </TechniqueListItem>
                                </SectionList>
                            </SubSection>
                        </div>
                    </SubSection>
                </Container>
            </Section>
            <Section>
                <SectionHeader>Education</SectionHeader>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                    <EducationCard>
                        <UniversityLogo src={UTKLogo} alt="University of Tennessee, Knoxville Logo" />
                        <EducationDetails>
                            <UniversityTitle>University of Tennessee, Knoxville</UniversityTitle>
                            <DegreeTitle>Bachelor of Science, Computer Science</DegreeTitle>
                            <EducationYear>2020 - Present</EducationYear>
                        </EducationDetails>
                    </EducationCard>
                    <EducationCard>
                        <UniversityLogo src={VanderbiltLogo} alt="Vanderbilt University Logo" />
                        <EducationDetails>
                            <UniversityTitle>Vanderbilt University</UniversityTitle>
                            <DegreeTitle>Web Development Bootcamp</DegreeTitle>
                            <EducationYear>April 2022 - September 2022</EducationYear>
                            <CertificateLink href={BootcampCertificate} target="_blank">View Certificate</CertificateLink>
                        </EducationDetails>
                    </EducationCard>
                </div>
            </Section>
            <Footer />
        </PageBox>
    )
}

export default Resume;
