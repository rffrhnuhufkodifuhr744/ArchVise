import React from 'react';
import { Link,Route, Routes } from 'react-router-dom';

// import resizeHook from '@hooks/resize';
import styles from './App.module.css';
import AppContactsUs from './components/AppContactsUs/AppContactsUs';
import HomePage from './components/HomePage/HomePage';
// import * as styles from './App.css';

const App = () => {
    return (
        <div className="main">
            <HomePage />
            <Routes>
                <Route path="/contacts" element={<AppContactsUs />} />
            </Routes>
        </div>
    );
};

// export { App };
export default App;
