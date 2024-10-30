import React, { useEffect, useState } from 'react';
import Button from '../../UI/src/Button';
import '../style/article.scss';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/articles')  // Cambia el puerto y ruta según tu configuración
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error fetching articles:', error));
  }, []);

  return (
    <>
      <h3>Artículos</h3>
      <div className="container-card">
        { articles.map(( article ) => (
          <div key={ article._id } className="article-card">
            <div className="article-image-content">
              <img src={ article.image_url } alt={ `${ article.name } image` } className="article-image" />
            </div>
            <div className="article-content">
              <p className="article-name">{ article.name }</p>
              <p className="article-category">{ article.category }</p>
              <p className="article-description">{ article.description }</p>
              <button className="article-button">Solicitar</button>
              <Button 
                text="Solicitar"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ArticleList;
