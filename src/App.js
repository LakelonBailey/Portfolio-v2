import React, {useEffect, useRef, useState} from 'react';

// CSS
import './App.css';


// COMPONENTS
import Layout from './components/Layout';
import Page from './components/Page';
import { FaHome, FaRocket, FaUser, FaFile } from 'react-icons/fa';


// PAGES
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';

// Context
import { PageTransitionProvider } from './context/PageTransitionContext';

const App = () => {

    const pages = {
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
    const defaultPage = 'about';
    const previousPage = useRef(null);
    const [currentPage, setPage] = useState(defaultPage);

    useEffect(() => {
        previousPage.current = currentPage;
    }, [currentPage]);

    return (
        <PageTransitionProvider>
             <Layout
            pages={pages}
            setPage={setPage}
            currentPage={currentPage}
            >
                <Page
                currentPage={currentPage}
                previousPage={previousPage.current}
                pages={pages}
                setPage={setPage}
                ></Page>
            </Layout>
        </PageTransitionProvider>
    );
}

export default App;
