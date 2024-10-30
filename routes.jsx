import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import HomePage from './src/components/HomePage/HomePage';
import AppContactsUs from './src/components/AppContactsUs/AppContactsUs';
import BeginingOfCourse from './src/components/BeginingOfCourse/BeginingOfCourse';
import AppLogin from './src/components/AppLogin/AppLogin';

// Створюємо компонент маршрутизації
const AppRoutes = () => {
    return (
        <Routes>
            {/* Маршрути */}
            <Route path="/" element={<HomePage />} /> {/* Головна сторінка */}
            <Route path="/contacts" element={<AppContactsUs />} />
            <Route path="/start" element={<BeginingOfCourse />} />
            <Route path="/login" element={<AppLogin />}></Route>
        </Routes>
    );
};

export default AppRoutes;
