import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para redirigir 
  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });
      // Verificando datos enviados
      console.log({ email, password });
      
      const data = await response.json();
      // Inspección de la respuesta del backend
      console.log('Información recibida del backend:', data);

      if (data.token) {
        localStorage.setItem('token', data.token);
        console.log('Login exitoso');

        // Limpiamos el formulario
        setEmail('');
        setPassword('');

        // Redirigimos a la página que deseamos llevar al usuario, loans
        navigate('/users'); // ruta de preferencia
      } else {
        console.error('Error en el login');
      }
    } catch (error) {
      console.error('Error al hacer login:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default Login;
