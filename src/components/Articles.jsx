import { useEffect, useState } from 'react';
import.meta.env.VITE_ASTRO_ARTICLES_API_KEY


export function ArticlePanel({ article }) {
    return (
        <div className="bg-gray-200 p-4 rounded-lg max-w-lg">
        <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
        <p>{article.description}</p>
        {article.urlToImage ? (
            <img className="mt-4 rounded" src={article.urlToImage} alt={article.title} />
        ) : (
            <div className="h-48 bg-gray-300 rounded"></div> // fallback image placeholder
        )}
        <a className="text-blue-500 mt-2 inline-block" href={article.url}>Read more</a>
        </div>
    );
}


export function Article() {
  const [AstronomyArticle, setAstronomyArticle] = useState(null);
  const [OceanArticle, setOceanArticle] = useState(null);

  useEffect(() => {
    fetchAstronomyArticle()
    fetchOceanArticle();
  }, []);

  async function fetchAstronomyArticle() {
    const url = `https://newsapi.org/v2/everything?q=astronomy&language=en&apiKey=${import.meta.env.VITE_ASTRO_ARTICLES_API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data.status === 'ok' && data.articles.length > 0) {
        const randomIndex = Math.floor(Math.random() * 100);
        const selectedAstronomyArticle = data.articles[randomIndex];
        setAstronomyArticle(selectedAstronomyArticle);
      } else {
        console.error('Failed to fetch article:', data.message);
      }
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  }

  async function fetchOceanArticle() {
    const url = `https://newsapi.org/v2/everything?q=surfing%20OR%20coastal%20weather&language=en&apiKey=${import.meta.env.VITE_ASTRO_ARTICLES_API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data.status === 'ok' && data.articles.length > 0) {
        const randomIndex = Math.floor(Math.random() * 100);
        const selectedOceanArticle = data.articles[randomIndex];
        setOceanArticle(selectedOceanArticle);
      } else {
        console.error('Failed to fetch article:', data.message);
      }
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  }

    return (
        <div className="flex justify-center p-10">
        {AstronomyArticle && OceanArticle ? (
            <div className="flex space-x-10">
              <div className="hover:scale-105 transition-transform duration-300">
                <ArticlePanel article={AstronomyArticle} />
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <ArticlePanel article={OceanArticle} />
              </div>
            </div>
        ) : (
            <p>Loading articles...</p>
        )}
        </div>
    );
    
}



