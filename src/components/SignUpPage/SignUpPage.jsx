import React, { useState } from 'react';
import styles from './SignUpPage.module.css';
import { Link } from 'react-router-dom';
import useSignUp from './useSignUp';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { signUp, message, loading } = useSignUp();

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(username, password);
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
                    <input type="submit" value="Sign up" name="signup" disabled={loading} />
                    {message && <p className={styles.message}>{message}</p>}
                    <div className={styles.signupLink}>
                        Are you a member? <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
