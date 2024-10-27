import React from 'react';

import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.navList}>
                <li>
                    <a href="/">Головна</a>
                </li>
                <li>
                    <a href="/about">Про нас</a>
                </li>
                <li>
                    <a href="/templates">Шаблони та приклади</a>
                </li>
                <li>
                    <a href="/resources">Ресурси для навчання</a>
                </li>
                <li>
                    <a href="/contacts">Контакти</a>
                </li>
                <li className={styles.login}>
                    <a href="/login">Увійти</a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
