import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

// weatherPage API call
exports.handler = async (event, context) => {
    try {
        const { name } = event.queryStringParameters;
        let response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.VITE_LOCATION_API_KEY}&units=metric`,
            {
                headers: { Accept: "application/json" },
            }
        );

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
