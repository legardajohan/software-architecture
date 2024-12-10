import React, {useContext} from "react";
import { AuthContext } from "../../../../context/AuthContext";
import Navigation from './Navigation';
import Button from "../../src/Button";
import '../style/header.scss';

const Header = () => {
  const { token, user, logout } = useContext(AuthContext);
  const firstName = user?.name?.split(' ')[0];

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

        <Navigation isAuthenticated={!!token} />

        {token && (
          <div className="user-actions">
            <div className="user-profile">
              <img
                src={user?.avatar_url || 'default-avatar.jpg'}
                alt="Foto de perfil"
                className="profile-pic"
              />
              <span className="user-name">{firstName}</span>
              <Button
                onClick={logout}
                type="button"
                btnClass="btn-outline"
                text="Cerrar sesión"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default React.memo(Header);
