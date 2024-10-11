import '../style/article.scss';
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
      <h2>Artículos</h2>
      {articles.map((article) => (
        <div key={article._id} className="card-article">
          <div className="image-content">
            <img src={article.image_url} alt={`${article.name} image`} className="card-image" />
          </div>
          <div className="card-content">
            <p className="price">{article.name}</p>
            <p className="free-shipping">{article.category}</p>
            <p className="product-name">{article.description}</p>
            <button className="details-button">Solicitar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
