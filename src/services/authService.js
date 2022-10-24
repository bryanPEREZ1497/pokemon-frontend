import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { messageService } from './messageService';

const api = 'http://localhost:3000/api/v1/auth';

const instance = axios.create({
    baseURL: api,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

const authService = {};

authService.login = async (username, password) => {
    const payload = {
        username,
        password
    }

    try {
        const response = await instance.post('login', payload);
        authService.setToken(response.data.token);
        authService.setUser(response.data.data);
        return response.data;
    } catch (error) {
        authService.logout();
        throw error;
    }
}

authService.signUp = async (username, password) => {
    const payload = {
        username,
        password
    }

    try {
        const response = await instance.post('register', payload);
        authService.setToken(response.data.token);
        authService.setUser(response.data.data);
        return response.data;
    } catch (error) {
        authService.logout();
        throw error;
    }
}


authService.setToken = (token) => {
    localStorage.setItem('token', token);
}

authService.getToken = () => {
    return localStorage.getItem('token');
}

authService.removeToken = () => {
    localStorage.removeItem('token');
}

authService.setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

authService.getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

authService.removeUser = () => {
    localStorage.removeItem('user');
}

authService.logout = () => {
    authService.removeToken();
    authService.removeUser();
}

authService.isAuthenticated = () => {
    const token = authService.getToken();
    return token ? true : false;
}

export default authService;
