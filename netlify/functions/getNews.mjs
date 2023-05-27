import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

// News Article API call
exports.handler = async (event, context) => {
    try {
        const { topic } = event.queryStringParameters;
        const url = `https://newsapi.org/v2/everything?q=${topic}&language=en&apiKey=${process.env.VITE_ASTRO_ARTICLES_API_KEY}`;
        let response = await axios.get(url, {
            headers: { Accept: "application/json" },
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error }),
        };
    }
};
