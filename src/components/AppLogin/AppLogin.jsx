import React, { useState } from 'react';
import styles from './AppLogin.module.css';
import { Link, useNavigate } from 'react-router-dom';

const AppLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Для перенаправления после успешного входа

    const handleSubmit = async (e) => {
        e.preventDefault(); // Предотвращаем стандартное поведение формы

        try {
            const response = await fetch('http://localhost:5000/login', {
                // Укажите свой бэкенд домен
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }), // Отправляем данные пользователя
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                navigate('/'); // Перенаправление на главную страницу или другую страницу
            } else {
                const errorText = await response.text();
                console.error('Login failed:', errorText);
                alert('Login failed: ' + errorText); // Уведомление пользователя об ошибке
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred: ' + error.message); // Обработка ошибок
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.center}>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.txtField}>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className={styles.txtField}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className={styles.pass}>Forgot Password?</div>
                    <input type="submit" value="Login" />
                    <div className={styles.signupLink}>
                        Not a member? <Link to="/signup">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppLogin;
