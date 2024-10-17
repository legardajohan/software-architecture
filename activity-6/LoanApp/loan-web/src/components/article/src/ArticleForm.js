import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importar estilos de toastify

// Obtenemos el token de localStorage
const token = localStorage.getItem('token');

function ArticleForm() {
  // Estado único para todos los campos del formulario
  const [articleForm, setArticleForm] = useState({
    name: '',
    category: '',
    description: '',
    image_url: ''
  }); 

  // Manejar los cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleForm({
      ...articleForm,
      [name]: value // Cambia el valor correspondiente al campo
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para enviar los datos al backend
    const newArticle = { ...articleForm };
    console.log('Nuevo artículo: ', newArticle);
    console.log('Token antes de enviar front:', token);

    try {
      const response = await fetch("http://localhost:3002/articles", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token // Aquí envías el token
          },
          body: JSON.stringify(newArticle)
        });
        console.log('Token de front: ', token);
      
      if (response.ok) {
        console.log("Artículo guardado correctamente");
        // Mostramos el toast de artículo registrado correctamente
        toast.success('¡Artículo registrado correctamente!');
        // Reiniciar el formulario o mostrar un mensaje de éxito
        setArticleForm({
          name: '',
          category: '',
          description: '',
          image_url: ''
        });
      } else {
        console.error("Error al guardar el artículo");
        // Toast de error
        toast.error('Error al registrar el artículo');
      }
    } catch (error) {
      console.error("Error en la solicitud");
      toast.error('Error con la solicitud: ', error); // Mostramos toast de captura del error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Artículo</h2>
      <input 
        type="text" 
        name="name"
        placeholder="Nombre" 
        value={articleForm.name} 
        onChange={handleInputChange} 
        required 
      />
      <select 
        name="category"
        value={articleForm.category} 
        onChange={handleInputChange} 
        required
      >
        <option value="">Categoría</option>
        <option value="Informática">Informática</option>
        <option value="Deportes">Deportes</option>
      </select>
      <input 
        type="text" 
        name="description"
        placeholder="Descripción" 
        value={articleForm.description} 
        onChange={handleInputChange} 
      />
      <input 
        type="text" 
        name="image_url"
        placeholder="URL de la imagen" 
        value={articleForm.image_url} 
        onChange={handleInputChange} 
      />
      <button type="submit">Guardar</button>
      <ToastContainer />
    </form>
  );
}

export default ArticleForm;
