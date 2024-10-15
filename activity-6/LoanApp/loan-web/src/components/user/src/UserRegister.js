import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importar estilos de toastify

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar_url, setAvatarUrl] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Hook para redirigir 

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para enviar los datos al backend
    const newUser = {
      name,
      email,
      password,
      phone,
      avatar_url
    };

    console.log('Nuevo usuario: ', newUser);

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
        setName('');
        setEmail('');
        setPhone('');
        setAvatarUrl('');
        setPassword('');
        
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
    <>
      <form onSubmit={handleSubmit}>
        <h2>Registrar Usuario</h2>
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="text" placeholder="URL del Avatar" value={avatar_url} onChange={(e) => setAvatarUrl(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Guardar Usuario</button>
      </form>
      {/* Contenedor para mostrar los toast */}
      <ToastContainer />
    </>
  );
};

export default Register;
