export const instance = axios.create({
    baseURL: api,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

instance.interceptors.request.use(function (config) {
    config.headers['Authorization'] = `Bearer ${authService.getToken()}`;
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    messageService.error(error);
    if (error.request.status === 403 || error.request.status === 401) {
        authService.logout();
    }

    return Promise.reject(error);
});