import React from 'react';

import styles from './homePage.module.css';
import Sidebar from './Sidebar/Sidebar';

const HomePage = () => {
    return (
        <div className={styles.container} id="homePage">
            <Sidebar />
            <div className={styles.content}>
                <img src="/img/ArchVis.png" alt="Логотип ArchVis" className={styles.logo} />
                <h1>ДИЗАЙН ВАШОГО ДОМУ У 3D</h1>
                <p>
                    <span>Цей курс навчить Вас основам 3D-моделювання,</span>
                    <br />
                    <span>що дозволить створювати архітектуру, дизайни з нуля</span>
                    <br />
                    <span>без професійних навичок</span>
                </p>
                <div className={styles.buttons}>
                    <a href="/start" className={styles.startBtn}>
                        Старт
                    </a>
                </div>
                <div className={styles.arrowDown}>
                    <a href="/aboutAV">
                        <img src="/img/white-down-arrow-png-2.png" alt="Стрілка вниз" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
