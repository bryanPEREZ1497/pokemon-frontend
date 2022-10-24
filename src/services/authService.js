import axios from 'axios';

const api = 'https://pokeapi-expressjs.herokuapp.com/api/v1/auth';
// const api = 'http://localhost:3000/api/v1/auth';

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
        authService.setUsername(response.data.data.username);
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
        authService.setUsername(response.data.data.username);
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

authService.setUsername = (username) => {
    localStorage.setItem('username', JSON.stringify(username));
}

authService.getUsername = () => {
    return (localStorage.getItem('username'));
}

authService.removeUsername = () => {
    localStorage.removeItem('username');
}

authService.logout = () => {
    authService.removeToken();
    authService.removeUsername();
}

authService.isAuthenticated = () => {
    const token = authService.getToken();
    return token ? true : false;
}

export default authService;
