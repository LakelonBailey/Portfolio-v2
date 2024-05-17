import React from "react";

// PAGES
import ACTPrep from "../pages/projects/ACTprep";
import Portfolio from "../pages/projects/Portfolio";
import Cinephiles from "../pages/projects/Cinephiles";
import Quizard from "../pages/projects/Quizard";
import Memebook from "../pages/projects/Memebook";
import OriginalPortfolio from "../pages/projects/OriginalPortfolio";
import FragranceFinder from "../pages/projects/FragranceFinder";
import ParticleSwarm from "../pages/projects/ParticleSwarm";
import UWGM from "../pages/projects/UWGM";
import BlenderBeeSwarm from "../pages/projects/BlenderBeeSwarm";

// Data
const projectPages = {
  actprep: {
    element: <ACTPrep />,
  },
  portfolio: {
    element: <Portfolio />,
  },
  cinephiles: {
    element: <Cinephiles />,
  },
  quizard: {
    element: <Quizard />,
  },
  memebook: {
    element: <Memebook />,
  },
  "original-portfolio": {
    element: <OriginalPortfolio />,
  },
  "fragrance-finder": {
    element: <FragranceFinder />,
  },
  "particle-swarm": {
    element: <ParticleSwarm />,
  },
  uwgm: {
    element: <UWGM />,
  },
  "blender-bee-swarm": {
    element: <BlenderBeeSwarm />,
  },
};

export default projectPages;
