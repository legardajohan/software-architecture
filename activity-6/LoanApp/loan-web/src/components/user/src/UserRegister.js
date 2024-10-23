import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../UI/src/InputG';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importar estilos de toastify

function Register() {
  // Estado único para el formulario
  const [ registerForm, setRegisterForm] = useState({
      name: '',
      email: '',
      password: '',
      phone: '',
      avatar_url: 'https://img.freepik.com/vector-gratis/lindo-astronauta-meditacion-yoga-espacio-dibujos-animados-vector-icono-ilustracion-concepto-icono-ciencia-deporte_138676-6482.jpg?t=st=1729124388~exp=1729127988~hmac=87d69008bf8e8e46a5a5e9e0bb0a1441ff50cf018cdef48fb2101d488fd3f752&w=740'
    }
  );

  const navigate = useNavigate(); // Hook para redirigir 

  // Manejar los cambios de los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm({
      ...registerForm,
      [name]: value // Cambia el valor correspondiente al campo
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para enviar los datos al backend
    const newUser = { ...registerForm };
    console.log('Nuevo usuario: ', newUser); // Consultamos el nuevo usuario

    try {
      const response = await fetch("http://localhost:3001/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)
        });
      
      if (response.ok) {
        // Mostrar toasto de éxito 
        toast.success('¡Usuario registrado con éxito!');
        // Limpiamos los datos del formulario
        setRegisterForm({
          name: '',
          email: '',
          password: '',
          phone: '',
          avatar_url: 'https://img.freepik.com/vector-gratis/lindo-astronauta-meditacion-yoga-espacio-dibujos-animados-vector-icono-ilustracion-concepto-icono-ciencia-deporte_138676-6482.jpg?t=st=1729124388~exp=1729127988~hmac=87d69008bf8e8e46a5a5e9e0bb0a1441ff50cf018cdef48fb2101d488fd3f752&w=740'
        });
        
        // Esperamos 1 segundo antes de redirigir al login
        setTimeout(() => {
          navigate('/login'); // Redirigimos al Login 
        }, 3000);

        console.log("Usuario guardado correctamente");
      } else {
        // Mostrar toast de error
        toast.error('Error al registrar el usuario');
        console.error("Error al guardar el usuario");
      }
    } catch (error) {
      // Mostrar toast de error en caso de fallo
      toast.error('Error al enviar la solicitud');
      console.error("Error en la solicitud: ", error);
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
      <h2>Registrar Usuario</h2>
      <Input 
        type="text" 
        name="name"
        label="Nombre" 
        value={ registerForm.name } 
        onChange={ handleInputChange }
        id="name" 
        required 
      />
      <Input 
        type="email"
        name="email" 
        label="Correo electrónico" 
        value={ registerForm.email } 
        onChange={ handleInputChange } 
        id="email"
        required 
      />
      <Input 
        type="text" 
        name="phone"
        label="Teléfono" 
        value={ registerForm.phone } 
        onChange={ handleInputChange } 
        id="phone"
        required
      />
      <Input 
        type="text" 
        name="avatar_url"
        label="URL del Avatar" 
        value={ registerForm.avatar_url } 
        onChange={ handleInputChange } 
        id="avatar_url"
        required
      />
      <Input 
        type="password" 
        name="password"
        label="Contraseña" 
        value={registerForm.password} 
        onChange={handleInputChange} 
        required 
      />
      <button type="submit">Guardar Usuario</button>
      <ToastContainer />
    </form>
  );
};

export default Register;
