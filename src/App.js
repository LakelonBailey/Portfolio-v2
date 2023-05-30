import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import './App.css';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
