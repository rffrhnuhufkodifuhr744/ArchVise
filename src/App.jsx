import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from '../routes';

// import resizeHook from '@hooks/resize';
import styles from './App.module.css';
import AppContactsUs from './components/AppContactsUs/AppContactsUs';
import HomePage from './components/HomePage/HomePage';
import Sidebar from './components/HomePage/Sidebar/Sidebar';
// import * as styles from './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className={styles.main}>
                <AppRoutes />
            </div>
        </BrowserRouter>
    );
};

export default App;
