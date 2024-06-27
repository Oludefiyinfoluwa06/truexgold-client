import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const TruexContext = createContext();

export const TruexProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [tasks, setTasks] = useState(null);
    const [globalEarningLimit, setGlobalEarningLimit] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const registerUser = async (username, referrer) => {
        setLoading(true);
        try {
            const response = await axios.post(`http://localhost:5000/api/users/register`, { username, referrer });
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setUser(response.data.user);
            navigate('/tap');
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    const getUserData = async (userId) => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
            setUser(response.data.user);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch user data');
        } finally {
            setLoading(false);
        }
    };

    const tapToEarn = async (userId, coinsEarned) => {
        setLoading(true);
        try {
            const response = await axios.post(`http://localhost:5000/api/users/earnCoins`, { userId, coinsEarned });
            setUser(response.data.user);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to earn coins');
        } finally {
            setLoading(false);
        }
    };

    const updateCoins = async (userId, newCoins) => {
        setLoading(true);
        try {
            const response = await axios.put(`http://localhost:5000/api/users/updateCoins`, { userId, newCoins });
            setUser(response.data.user);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to earn coins');
        } finally {
            setLoading(false);
        }
    };

    const fetchTasks = async () => {
        setLoading(true);

        try {
            const response = await axios.get(`http://localhost:5000/api/tasks/`);
            setTasks(response.data.tasks);
        } catch (err) {
            console.log(err);
            setError(err.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    const completeTask = async (userId, taskId) => {
        setLoading(true);
        try {
            const response = await axios.post(`http://localhost:5000/api/tasks/complete`, { userId, taskId });
            setUser(response.data.user);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Task completion failed');
        } finally {
            setLoading(false);
        }
    };

    const checkUserTaskCompletion = async (userId, taskId) => {
        setLoading(true);

        try {
            const response = await axios.post(`http://localhost:5000/api/tasks/checkCompletion`, { userId, taskId });
            setUser(response.data.user);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Task completion check failed');
        } finally {
            setLoading(false);
        }
    }

    const updateWalletAddress = async (userId, walletAddress) => {
        setLoading(true);
        try {
            const response = await axios.put(`https://truex-backend.vercel.app/api/users/updateWallet`, { userId, walletAddress });
            setUser(response.data.user);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update wallet address');
        } finally {
            setLoading(false);
        }
    };

    const getGlobalEarningLimit = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/setting/globalEarningLimit`);
            setGlobalEarningLimit(response.data.globalEarningLimit);
        } catch (err) {
            console.error('Error fetching global earning limit:', err);
        }
    };

    return (
        <TruexContext.Provider
            value={{
                user,
                tasks,
                globalEarningLimit,
                loading,
                error,
                setError,
                registerUser,
                getUserData,
                tapToEarn,
                updateCoins,
                fetchTasks,
                completeTask,
                checkUserTaskCompletion,
                updateWalletAddress,
                getGlobalEarningLimit
            }}
        >
            {children}
        </TruexContext.Provider>
    );
};
