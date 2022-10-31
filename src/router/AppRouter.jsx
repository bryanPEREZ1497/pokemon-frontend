import React from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";

import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import CharacterList from '../pages/pokemon/CharacterList';
import CharacterPage from '../pages/pokemon/CharacterPage';
import HomePage from '../pages/home/HomePage';
import PrivateRoutes from './PrivateRoutes';

export default function AppRouter() {
    return (
        <div 
        style={{
            margin:0,
            padding:0,
            width:'100%',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            
        }}>
            <Routes>
                {/* Public Routes */}
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="home" element={<HomePage />} />

                {/* PrivateRoutes */}
                <Route element={<PrivateRoutes />}>
                    <Route path="list" element={<CharacterList />} />
                    <Route path="character/:id" element={<CharacterPage />} />
                </Route>
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </div >
    )
}
