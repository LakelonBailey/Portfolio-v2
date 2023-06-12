import React from 'react';
// Icons
import { FaHome, FaRocket, FaUser, FaFile } from 'react-icons/fa';


// PAGES
import Hero from '../pages/Hero';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Resume from '../pages/Resume';

// Data
const mainPages = {
    'hero': {
        name: 'Home',
        element: <Hero />,
        icon: <FaHome />
    },
    'about': {
        name: 'About',
        element: <About />,
        icon: <FaUser />
    },
    'projects': {
        name: 'Projects',
        element: <Projects />,
        icon: <FaRocket />
    },
    'resume': {
        name: 'Resume',
        element: <Resume />,
        icon: <FaFile />
    },
};

export default mainPages;