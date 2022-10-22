import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext/AuthContext';

export default function PrivateRoutes() {
    const { isLoggedIn } = useContext( AuthContext );
    
    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    )
}
