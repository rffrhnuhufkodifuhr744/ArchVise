import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useSignUp = () => {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const signUp = async (username, password) => {
        setLoading(true);
        setMessage('');

        try {
            const response = await axios.post('http://localhost:5000/signup', { username, password });

            if (response.status === 201) {
                setMessage('Ви успішно зареєстровані!');
                setTimeout(() => navigate('/'), 2000); //  через 2с кидаємо на головну
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setMessage("Користувач уже існує. Будь ласка, виберіть інше ім'я.");
            } else {
                setMessage('Сталася помилка. Спробуйте ще раз пізніше.');
            }
        } finally {
            setLoading(false);
        }
    };

    return { signUp, message, loading };
};

export default useSignUp;
