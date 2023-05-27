import { useEffect, useState } from "react";

export function ArticlePanel({ article }) {
    return (
        <div className="max-w-lg rounded-lg bg-gray-200 p-4">
            <h2 className="mb-2 text-2xl font-bold">{article.title}</h2>
            <p>{article.description}</p>
            {article.urlToImage ? (
                <img
                    className="mt-4 rounded"
                    src={article.urlToImage}
                    alt={article.title}
                />
            ) : (
                <div className="h-48 rounded bg-gray-300"></div> // fallback image placeholder
            )}
            <a className="mt-2 inline-block text-blue-500" href={article.url}>
                Read more
            </a>
        </div>
    );
}

export function Article() {
    const [AstronomyArticle, setAstronomyArticle] = useState(null);
    const [OceanArticle, setOceanArticle] = useState(null);

    useEffect(() => {
        fetchAstronomyArticle();
        fetchOceanArticle();
    }, []);

    async function fetchAstronomyArticle() {
        const topic = "astronomy";
        const apiUrl = `/.netlify/functions/getNews?topic=${topic}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log(data);

            if (data.status === "ok" && data.articles.length > 0) {
                const randomIndex = Math.floor(Math.random() * 100);
                const selectedAstronomyArticle = data.articles[randomIndex];
                setAstronomyArticle(selectedAstronomyArticle);
            } else {
                console.error("Failed to fetch article:", data.message);
            }
        } catch (error) {
            console.error("Error fetching article:", error);
        }
    }

    async function fetchOceanArticle() {
        const topic = "surfing%20OR%20coastal%20weather";
        const apiUrl = `/.netlify/functions/getNews?topic=${topic}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log(data);

            if (data.status === "ok" && data.articles.length > 0) {
                const randomIndex = Math.floor(Math.random() * 100);
                const selectedOceanArticle = data.articles[randomIndex];
                setOceanArticle(selectedOceanArticle);
            } else {
                console.error("Failed to fetch article:", data.message);
            }
        } catch (error) {
            console.error("Error fetching article:", error);
        }
    }

    return (
        <div className="flex justify-center p-10">
            {AstronomyArticle && OceanArticle ? (
                <div className="flex flex-col md:flex-row md:justify-center md:space-x-10">
                    <div className="mb-4 flex-1 transition-transform duration-300 hover:scale-105 md:mb-0">
                        <ArticlePanel article={AstronomyArticle} />
                    </div>
                    <div className="flex-1 transition-transform duration-300 hover:scale-105">
                        <ArticlePanel article={OceanArticle} />
                    </div>
                </div>
            ) : (
                <p>Loading articles...</p>
            )}
        </div>
    );
}
