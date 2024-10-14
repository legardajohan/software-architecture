import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar_url, setAvatarUrl] = useState('');
  const [password, setPassword] = useState('');

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
        console.log("Usuario guardado correctamente");
        // Reiniciar el formulario o mostrar un mensaje de éxito
      } else {
        console.error("Error al guardar el usuario");
      }
    } catch (error) {
      console.error("Error en la solicitud: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Usuario</h2>
      <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type="text" placeholder="URL del Avatar" value={avatar_url} onChange={(e) => setAvatarUrl(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Guardar Usuario</button>
    </form>
  );
};

export default Register;
