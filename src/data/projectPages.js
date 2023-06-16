import React from 'react';

// PAGES
import ACTPrep from '../pages/projects/ACTprep';
import Portfolio from '../pages/projects/Portfolio';
import Cinephiles from '../pages/projects/Cinephiles';
import Quizard from '../pages/projects/Quizard';
import Memebook from '../pages/projects/Memebook';
import OriginalPortfolio from '../pages/projects/OriginalPortfolio';

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
    },
    'original-portfolio': {
        element: <OriginalPortfolio />
    },
};

export default projectPages;