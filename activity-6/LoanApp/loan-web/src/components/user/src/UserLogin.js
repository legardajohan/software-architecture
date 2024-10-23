import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../UI/src/TextInput';
import '../style/input.scss';

const Login = () => {
  const [ loginForm, setLoginForm ] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate(); // Hook para redirigir 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const singIn = { ...loginForm };

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(singIn)
      });
      // Verificando datos enviados
      console.log(singIn);

      const data = await response.json();
      // Inspección de la respuesta del backend
      console.log('Información recibida del backend:', data);

      if (data.token) {
        localStorage.setItem('token', data.token);
        console.log('Login exitoso');

        // Limpiamos el formulario
        setLoginForm({
          email: '',
          password: ''
        });

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
    <form onSubmit={ handleLogin }>
      <h2>Login</h2>
      <Input 
        type="email"
        name="email"
        label="Correo electrónico"
        value={ loginForm.email }
        onChange={ handleInputChange }
        id="email"
        required
      />
      <Input 
        type="password"
        name="password"
        value={ loginForm.password }
        label="Contraseña"
        onChange={ handleInputChange }
        id="password"
        required
      />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default Login;
