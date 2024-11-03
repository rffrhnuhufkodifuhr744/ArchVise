import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const login = async (username, password) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                navigate('/');
            } else {
                const errorText = await response.text();
                console.error('Login failed:', errorText);
                setError('Login failed: ' + errorText);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error };
};

export default useLogin;
