import React from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import CharacterList from '../pages/CharacterList';
import CharacterPage from '../pages/CharacterPage';
import authService from '../services/authService';
import PrivateRoutes from './PrivateRoutes';

export default function AppRouter() {
    return (
        <div className='container'>
            <Routes>
                {/* Public Routes */}
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />

                {/* PrivateRoutes */}
                <Route element={<PrivateRoutes />}>
                    <Route path="list" element={<CharacterList />} />
                    <Route path="character/:id" element={<CharacterPage />} />
                </Route>
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </div >
    )
}
