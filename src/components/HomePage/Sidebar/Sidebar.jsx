import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.navList}>
                <li>
                    <Link to="/">Головна</Link>
                </li>
                <li>
                    <Link to="/about">Про нас</Link>
                </li>
                <li>
                    <Link to="/templates">Шаблони та приклади</Link>
                </li>
                <li>
                    <Link to="/resources">Ресурси для навчання</Link>
                </li>
                <li>
                    <Link to="/contacts">Контакти</Link>
                </li>
                <li className={styles.login}>
                    <Link to="/login">Увійти</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
