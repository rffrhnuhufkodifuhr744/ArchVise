import React, { useState } from 'react';
import styles from './SignUpPage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Хук для перенаправлення на мейн сторінку
    const handleSubmit = async (e) => {
        e.preventDefault(); // Запобігаємо перезавантаженню сторінки
        setMessage(''); // Скидаємо попереднє повідомлення

        try {
            const response = await axios.post('http://localhost:5000/signup', {
                username,
                password,
            });

            if (response.status === 201) {
                setMessage('Ви успішно зареєстровані!');
                setTimeout(() => {
                    navigate('/'); // Перенаправляємо на мейн пейдж
                }, 2000); // Чекаємо 2с перед перенаправленням
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setMessage("Користувач уже існує. Будь ласка, виберіть інше ім'я.");
            } else {
                setMessage('Сталася помилка. Спробуйте ще раз пізніше.');
            }
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.center}>
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.txtField}>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className={styles.txtField}>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <input type="submit" value="Sign up" name="signup" />
                    {message && <p className={styles.message}>{message}</p>} {/* Відображення повідомлення */}
                    <div className={styles.signupLink}>
                        Are you a member? <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
