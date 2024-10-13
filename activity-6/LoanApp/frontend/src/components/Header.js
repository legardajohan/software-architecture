import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  // Obtener el token de autenticación del localStorage
  const token = localStorage.getItem('token');
 
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
