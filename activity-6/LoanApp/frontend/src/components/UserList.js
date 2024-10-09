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
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={`${user.name} avatar`} width="50" height="50" />
            <p>{user.name} - {user.email} - {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
