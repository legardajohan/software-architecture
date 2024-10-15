import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();
  // Obtener el token de autenticación del localStorage
  const token = localStorage.getItem('token');

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('token'); // Elimina el token
    navigate('/login'); // Redirige al login
  };
 
  return (
    <header className="App-header">
      <h1>LoanApp</h1>
      <nav>
      {token ? (
          <>
            <Link to="/users">Usuarios</Link> | 
            <Link to="/articles">Artículos</Link> | 
            <Link to="/loans">Préstamos</Link> |
            <Link to="/articles/new">Nuevo artículo</Link> |
            <Link to="/loans/new">Nuevo préstamo</Link>
            <button onClick={handleLogout} >Cerrar sesión</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link> | 
            <Link to="/register">Registrar</Link> | 
            <Link to="/loans">Préstamos</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
