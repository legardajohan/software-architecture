import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <h1>LoanApp</h1>
      <nav>
        <Link to="/users">Usuarios</Link> | 
        <Link to="/articles">Artículos</Link> | 
        <Link to="/loans">Préstamos</Link> |
        <Link to="/users/new">Nuevo usuario</Link> |
        <Link to="/articles/new">Nuevo artículo</Link> |
        <Link to="/loans/new">Nuevo préstamo</Link>
      </nav>
    </header>
  );
}

export default Header;
