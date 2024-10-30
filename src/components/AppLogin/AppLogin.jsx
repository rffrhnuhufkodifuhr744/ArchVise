import React from 'react';
import styles from './AppLogin.module.css';

const AppLogin = () => {
    return (
        <div className={styles.loginPage}>
            <div class={styles.center}>
                <h1>Login</h1>
                <form method="post">
                    <div class={styles.txtField}>
                        <input type="text" required />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div class={styles.txtField}>
                        <input type="password" required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div class={styles.pass}>Forgot Password?</div>
                    <input type="submit" value="Login" />
                    <div class={styles.signupLink}>
                        Not a member ? <a href="#">Sign up</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppLogin;
