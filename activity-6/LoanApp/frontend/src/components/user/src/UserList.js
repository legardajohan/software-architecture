import '../style/user.scss';
import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')  // Cambia el puerto y ruta según tu configuración
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>Usuarios</h2>
      {users.map((user) => (
        <div className="card" key={user._id}>
          <div className="avatar">
            <div className="avatar-icon">
              <img className="avatar-icon" src={user.avatar_url} alt={`${user.name} avatar`} />
            </div>
          </div>
          <h2>{user.name}</h2>
          <div className="info">
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
          <button className="edit-button">Editar</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
