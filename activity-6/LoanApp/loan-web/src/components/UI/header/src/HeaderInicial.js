import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import Button from "../../src/Button";
import '../style/header.scss';

const Header = () => {

    const navigate = useNavigate();
    // Obtener el token de autenticación del localStorage
    const token = localStorage.getItem('token');
    // Obtener los datos del usuario
    const user = JSON.parse(localStorage.getItem('user'));
    const firstName = user?.name?.split(' ')[0];
    console.log('Datos del usuario en header: ', user);

    // Función para cerrar sesión
    const handleLogout = () => {
        console.log('Cerrando sesión desde Header');
        localStorage.removeItem('token'); // Elimina el token
        localStorage.removeItem('user'); // Elimina datos del usuario
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
                                <Link to="/login">Login</Link>
                                <Link to="/register">Registrar</Link>
                                <Link to="/loans">Préstamos</Link>
                            </>
                        )}
                    </ul>
                </nav>
                {token ? (
                    <div className="user-actions">
                        <div className="user-profile">
                            <img
                                src={ user.avatar_url }
                                alt="Foto de perfil"
                                className="profile-pic"
                            />
                            <span className="user-name">{ firstName }</span>
                            <Button
                                onClick={ handleLogout }
                                type="button"
                                btnClass="btn-outline"
                                text="Cerrar sesión"
                            />
                        </div>
                    </div>
                ): undefined}

            </div>
        </header>
    );

};

export default Header;