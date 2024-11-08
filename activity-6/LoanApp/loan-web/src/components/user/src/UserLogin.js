import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../UI/src/Input';
import Button from '../../UI/src/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importar estilos de toastify
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

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginForm)
      });
      // Verificando datos enviados
      console.log('Cambio a loginForm: ', loginForm);

      const data = await response.json();
      // Inspección de la respuesta del backend
      console.log('Información recibida del backend:', data);

      if (response.ok && data.token) {
        // Almacenamos los datos del usuario y el token
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user)); // Guarda el usuario
        toast.success('Login exitoso!');
        console.log('Login exitoso');

        // Limpiamos el formulario
        setLoginForm({
          email: '',
          password: ''
        });

        // Redirigimos a la página que deseamos llevar al usuario, loans
        navigate('/users'); // ruta de preferencia
      } else {
        toast.error(data.error || 'Error en el inicio de sesión');
      }
    } catch (error) {
      toast.error('Error de red o servidor');
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
      <Button 
        btnClass="btn-primary"
        text="Iniciar sesión"
      />
      <ToastContainer />
    </form>
  );
};

export default Login;
