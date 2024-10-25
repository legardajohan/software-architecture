import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import Button from "../../src/Button";
import '../style/header.scss';

const Header = () => {

    const navigate = useNavigate();
    // Obtener el token de autenticación del localStorage
    const token = localStorage.getItem('token');

    // Función para cerrar sesión
    const handleLogout = () => {
        localStorage.removeItem('token'); // Elimina el token
        navigate('/login'); // Redirige al login
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-container">
                    <img
                        src="https://i.pinimg.com/564x/8b/66/cc/8b66ccbb8b6226847404d8dd4a8d687b.jpg"
                        alt="Logo LoanApp"
                        className="logo"
                    />
                    <h1 className="brand-name">LoanApp</h1>
                </div>
                <nav className="navigation">
                    <ul>
                        {token ? (
                            <>
                                <Link to="/users">Usuarios</Link>
                                <Link to="/articles">Artículos</Link>
                                <Link to="/loans">Préstamos</Link>
                                <Link to="/articles/new">Nuevo artículo</Link>
                                <Link to="/loans/new">Nuevo préstamo</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login">Login</Link> |
                                <Link to="/register">Registrar</Link> |
                                <Link to="/loans">Préstamos</Link>
                            </>
                        )}
                    </ul>
                </nav>
                <div className="user-actions">
                    <div className="user-profile">
                        <img
                            src="https://i.pinimg.com/enabled_hi/564x/a4/24/cb/a424cb438cd1e629b77074eaff9fcd0e.jpg"
                            alt="Foto de perfil"
                            className="profile-pic"
                        />
                        <span className="user-name">Vanessa</span>
                        <Button 
                            onClick={ handleLogout }
                            btnType="btn-outline"
                            text="Cerrar sesión" 
                        />
                    </div>
                </div>
            </div>
        </header>
    );

};

export default Header;