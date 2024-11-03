import React, { useState } from 'react';
import styles from './AppLogin.module.css';
import { Link } from 'react-router-dom';
import useLogin from './useLogin';

const AppLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password); // хук для логіна
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
                    <input type="submit" value="Login" disabled={loading} />
                    {error && <div className={styles.error}>{error}</div>}
                    <div className={styles.signupLink}>
                        Not a member? <Link to="/signup">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppLogin;
