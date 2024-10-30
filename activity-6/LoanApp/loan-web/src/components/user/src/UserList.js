import React, { useEffect, useState } from 'react';
import Button from '../../UI/src/Button';
import '../style/user.scss';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')  // Cambia el puerto y ruta según tu configuración
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <>
      <h2>Usuarios</h2>
      <div className="container-user">
        {users.map((user) => (
          <div className="user-card" key={user._id}>
            <div className="user-avatar">
              <div className="user-avatar-icon">
                <img className="user-avatar-icon" src={user.avatar_url} alt={`${user.name}-avatar`} />
              </div>
            </div>
            <h2>{user.name}</h2>
            <div className="user-info">
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
            <Button
              type="button"
              btnClass="btn-outline-small"
              text="Editar"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default UserList;
