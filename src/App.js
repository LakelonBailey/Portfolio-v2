import React, {useEffect, useRef, useState} from 'react';

// CSS
import './App.css';
import './animation.css';


// COMPONENTS
import Layout from './components/Layout';
import Page from './components/Page';

// Context
import { PageTransitionProvider } from './context/PageTransitionContext';
import mainPages from './data/mainPages';
import projectPages from './data/projectPages';


function hexToRgb(hex) {
    let r = 0, g = 0, b = 0;

    // 3 digits
    if (hex.length === 4) {
      r = "0x" + hex[1] + hex[1];
      g = "0x" + hex[2] + hex[2];
      b = "0x" + hex[3] + hex[3];

    // 6 digits
    } else if (hex.length === 7) {
      r = "0x" + hex[1] + hex[2];
      g = "0x" + hex[3] + hex[4];
      b = "0x" + hex[5] + hex[6];
    }

    return ""+ +r + "," + +g + "," + +b;
}

const App = () => {
    useEffect(() => {
        // Define the theme numbers you want to convert
        const themeNumbers = [1, 2, 3, 4];

        for (let themeNumber of themeNumbers) {
            // Get the CSS variable value
            const themeColor = getComputedStyle(document.documentElement)
                .getPropertyValue(`--theme-${themeNumber}`).trim();

            // Convert it to RGB
            const themeRGB = hexToRgb(themeColor);

            // Set the RGB value as a new CSS variable
            document.documentElement.style.setProperty(`--theme-${themeNumber}-rgb`, themeRGB);
        }
    }, []);

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
