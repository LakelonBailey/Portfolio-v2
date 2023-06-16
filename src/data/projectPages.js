import React from 'react';
// Icons
import { FaHome, FaRocket, FaUser, FaFile } from 'react-icons/fa';


// PAGES
import ACTPrep from '../pages/projects/ACTprep';
import Portfolio from '../pages/projects/Portfolio';
import Cinephiles from '../pages/projects/Cinephiles';
import Quizard from '../pages/projects/Quizard';
import Memebook from '../pages/projects/Memebook';

// Data
const projectPages = {
    'actprep': {
        element: <ACTPrep />,
    },
    'portfolio': {
        element: <Portfolio />
    },
    'cinephiles': {
        element: <Cinephiles />
    },
    'quizard': {
        element: <Quizard />
    },
    'memebook': {
        element: <Memebook />
    }
};

export default projectPages;