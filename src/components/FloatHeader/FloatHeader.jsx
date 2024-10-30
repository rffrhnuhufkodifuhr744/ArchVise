import React, { useEffect, useState } from 'react';
import styles from './FloatHeader.module.css';
import { Link } from 'react-router-dom';

const AppHeader = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbarFloatingHeader} ${isVisible ? styles.visible : ''}`}>
            <ul>
                <li>
                    <Link to="/">Головна</Link>
                </li>
                <li>
                    <Link to="/aboutAV">Про нас</Link>
                </li>
                <li>
                    <Link to="/examples">Шаблони та приклади</Link>
                </li>
                <li>
                    <Link to="/resources">Ресурси для навчання</Link>
                </li>
                <li>
                    <Link to="/contacts">Контакти</Link>
                </li>
            </ul>
            <Link to="/login" className={styles.loginButton}>
                Увійти
            </Link>
        </nav>
    );
};

export default AppHeader;
