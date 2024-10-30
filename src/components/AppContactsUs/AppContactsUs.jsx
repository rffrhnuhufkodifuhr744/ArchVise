import React from 'react';
import styles from './AppContactsUs.module.css';

const AppContactsUs = () => {
    return (
        <>
            <div className={styles.contactContainer}>
                <img className={styles.contactImage} src="/img/contact us.png" alt="Contact us" />
                <h1 className={styles.contactText}>Контакти</h1>
            </div>
            <div className={styles.archQuest}>
                <h3 className={styles.haveQst}>Є питання стосовно ArchVisStudio?</h3>
                <p>
                    Якщо вам потрібна додаткова інформація щодо будь-якої функції планувальника простору Roomtodo, будь
                    ласка, зв’яжіться з нами будь-яким із цих каналів.
                </p>
                <div className={styles.contacts}>
                    <div className={styles.officeBlock}>
                        <h4>ТОВ ArchVis Studio</h4>
                        <p>Ukraine, Uzhorod</p>
                        <p>ejjekrj</p>
                    </div>
                    <div className={styles.officeBlock}>
                        <h4>Development office</h4>
                        <p>04080, Ukraine, Kyiv, Kyrylivska 47a</p>
                        <p>+38 093 566 10 80</p>
                    </div>
                </div>
            </div>
            <div className={styles.contactForm}>
                <form action="/submit" method="POST">
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Your email</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>

                    <div className={styles.formGroup}>
                        <button type="submit" className={styles.submitButton}>
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AppContactsUs;
