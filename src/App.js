import React, {useEffect, useRef, useState} from 'react';

// CSS
import './App.css';


// COMPONENTS
import Layout from './components/Layout';
import Page from './components/Page';

// Context
import { PageTransitionProvider } from './context/PageTransitionContext';
import mainPages from './data/mainPages';
import projectPages from './data/projectPages';


const App = () => {
    const pages = {
        ...mainPages,
        ...projectPages
    };

    const defaultPage = 'hero';
    const previousPage = useRef(null);
    const [currentPage, setPage] = useState(defaultPage);

    useEffect(() => {
        previousPage.current = currentPage;
    }, [currentPage]);

    return (
        <PageTransitionProvider>
             <Layout
            pages={mainPages}
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
