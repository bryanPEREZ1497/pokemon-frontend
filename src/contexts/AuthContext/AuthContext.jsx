import React, { useReducer, createContext } from "react";

import authService from "../../services/authService";
import AuthReducer, { actionTypes } from "./AuthReducer";

export const AuthContext = createContext({});

const init = () => {
    const token = authService.getToken();
    const username = authService.getUsername();

    return {
        isLoggedIn: !!token,
        token,
        username,
    }
}


export default function AuthProvider({ children }) {
    const [authState, dispatch] = useReducer(AuthReducer, {}, init);

    const logIn = async (username, password) => {
        try {
            const response = await authService.login(username, password)
            const payload = { username, token: response.token }
            const action = { type: actionTypes.logIn, payload }

            dispatch(action);
        } catch (error) {
            throw error;
        }
    }


    const logOut = () => {
        authService.logout();
        const action = { type: actionTypes.logOut };
        dispatch(action);
    }

    const signUp = async (username, password) => {
        try {
            const response = await authService.signUp(username, password)
            const payload = { username, token: response.token }
            const action = { type: actionTypes.logIn, payload }

            dispatch(action);
        } catch (error) {
            throw error;
        }
    };

    return (
        <AuthContext.Provider
            value={{
                ...authState,
                logIn,
                logOut,
                signUp
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
