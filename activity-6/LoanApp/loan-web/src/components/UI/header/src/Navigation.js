import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = React.memo(({ isAuthenticated }) => {
  return (
    <nav className="navigation">
      <ul>
        {isAuthenticated ? (
          <>
            <Link to="/users">Usuarios</Link>
            <Link to="/articles">Artículos</Link>
            <Link to="/loans">Préstamos</Link>
            <Link to="/articles/new">Nuevo artículo</Link>
            <Link to="/loans/new">Nuevo préstamo</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Registrar</Link>
            <Link to="/loans">Préstamos</Link>
          </>
        )}
      </ul>
    </nav>
  );
});

export default Navigation;
