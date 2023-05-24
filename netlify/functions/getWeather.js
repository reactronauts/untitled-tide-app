import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

// Skeleton for weatherPage API call
// TODO: fix weatherPage call
exports.handler = async (event, context) => {
    try {
        const { name } = event.queryStringParameters;
        let response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=3f30f4fc409dcbbfeac403b001b1804e&units=metric`,
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
