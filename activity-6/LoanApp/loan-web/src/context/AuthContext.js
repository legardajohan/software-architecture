import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // Cargar token y usuario desde localStorage al montar
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    }
  }, []);

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    window.location.href = '/login'; // Redirigir al login
  };

  return (
    <AuthContext.Provider value={{ token, user, setToken, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
