import React, { useEffect, useState } from 'react'
import TopNavbar from './components/TopNavbar';
import AuthProvider from './contexts/AuthContext/AuthContext';
import FavoritesProvider from './contexts/FavoriteContext/FavoritesContext';
import AppRouter from './router/AppRouter';

export default function App() {

  return (
    <AppState>
      <TopNavbar />
      <AppRouter />
    </AppState>
  )
}


function AppState({ children }) {
  return (
    <AuthProvider>
      <FavoritesProvider>
        {children}
      </FavoritesProvider>
    </AuthProvider>
  )
}
