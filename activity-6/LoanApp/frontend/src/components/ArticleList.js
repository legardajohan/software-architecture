import React, { useEffect, useState } from 'react';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/articles')  // Cambia el puerto y ruta según tu configuración
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Artículos</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <img src={article.image_url} alt={`${article.name} image`} width="50" height="50" />
            <p>{article.name} - {article.category}</p>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
