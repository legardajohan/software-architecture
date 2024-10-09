import React, { useState } from 'react';

function ArticleForm() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image_url, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos al backend
    console.log({ name, category, description, image_url });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Artículo</h2>
      <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Categoría</option>
        <option value="informática">Informática</option>
        <option value="deportes">Deportes</option>
      </select>
      <input type="text" placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="URL de la imagen" value={image_url} onChange={(e) => setImageUrl(e.target.value)} />
      <button type="submit">Guardar Artículo</button>
    </form>
  );
}

export default ArticleForm;
