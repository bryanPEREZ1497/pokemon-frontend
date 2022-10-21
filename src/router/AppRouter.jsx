import React from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import CharacterList from '../pages/CharacterList';
import CharacterPage from '../pages/CharacterPage';
import authService from '../services/authService';

export default function AppRouter() {
    return (
        <div className='container'>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="list" element={<CharacterList />}
                    // render={() => {
                    //     return authService.isAuthenticated() ? <Navigate to="/" /> : <Login />
                    // }} 
                    />
                <Route path="character/:id" element={<CharacterPage />} />
                <Route path="/" element={<Navigate to="/list" />} />
            </Routes>
        </div>
    )
}
