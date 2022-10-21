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
        const token = response.data.token;
        authService.setToken(token);
        return true;
    } catch (error) {
        authService.logout();
        return false;
    }
}

authService.register = async (username, password) => {
    const payload = {
        username,
        password
    }

    try {
        const response = await instance.post('register', payload);
        const token = response.data.token;
        authService.setToken(token);
        return response.data;
    }
    catch (error) {
        // console.log('error de registro', error.response.data.message);
        messageService.error(error.response.data.message);
    }
}


authService.setToken = (token) => {
    document.cookie = `token=${token}`
}

authService.getToken = () => {
    const token = document.cookie.split('=')[1];
    return token;
}

authService.logout = () => {
    document.cookie = 'token=';
}

authService.isAuthenticated = () => {
    const token = authService.getToken();
    return token ? true : false;
}

export default authService;
