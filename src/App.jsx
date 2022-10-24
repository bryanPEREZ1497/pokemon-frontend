import React, { useEffect, useState } from 'react'
import TopNavbar from './components/TopNavbar';
import AuthProvider from './contexts/AuthContext/AuthContext';
import AppRouter from './router/AppRouter';

export default function App() {

  return (
    <AuthProvider>
      <TopNavbar />
      <AppRouter />
    </AuthProvider>
  )
}
