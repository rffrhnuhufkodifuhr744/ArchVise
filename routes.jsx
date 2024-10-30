import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

//import CartPage from './src/pages/CartPage/CartPage';
// Імпортуємо компоненти сторінок
import HomePage from './src/components/HomePage/HomePage';
//import ProfilePage from './src/pages/ProfilePage/ProfilePage';
import AppContactsUs from './src/components/AppContactsUs/AppContactsUs';
import BeginingOfCourse from './src/components/BeginingOfCourse/BeginingOfCourse';

// Створюємо компонент маршрутизації
const AppRoutes = () => {
    return (
        <Routes>
            {/* Маршрути */}
            <Route path="/" element={<HomePage />} /> {/* Головна сторінка */}
            <Route path="/contacts" element={<AppContactsUs />} />
            <Route path="/start" element={<BeginingOfCourse />} />
        </Routes>
    );
};

export default AppRoutes;
