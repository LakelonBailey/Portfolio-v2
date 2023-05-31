import React, {useState} from 'react';
import Main from './components/Main';
import './App.css';

const App = () => {

    const pages = {
        'main': <Main />
    };

    const [page, setPage] = useState('main');

    return (
        pages[page]
    );
}

export default App;
