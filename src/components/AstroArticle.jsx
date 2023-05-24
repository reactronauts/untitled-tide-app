import { useEffect, useState } from 'react';


export function Article() {
  const [article, setArticle] = useState(null);
  const apiKey = '511789d3427e49aab21edc10b1b6c59d';

  useEffect(() => {
    fetchArticle();
  }, []);

  async function fetchArticle() {
    const url = `https://newsapi.org/v2/everything?q=celestial&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data.status === 'ok' && data.articles.length > 0) {
        const randomIndex = Math.floor(Math.random() * 100);
        const selectedArticle = data.articles[randomIndex];
        setArticle(selectedArticle);
      } else {
        console.error('Failed to fetch article:', data.message);
      }
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  }
  return (
    <div className="flex justify-start">
    {article ? (
        <div className="bg-gray-200 p-4 rounded-lg max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
          <p>{article.description}</p>
          {article.urlToImage ? (
            <img className="mt-4 rounded" src={article.urlToImage} alt={article.title} />
          ) : (
            <div className="h-48 bg-gray-300 rounded"></div> // fallback image placeholder
          )}
          <a className="text-blue-500 mt-2 inline-block" href={article.url}>Read more</a>
        </div>
      ) : (
        <p>Loading article...</p>
      )}
    </div>
  );
}
