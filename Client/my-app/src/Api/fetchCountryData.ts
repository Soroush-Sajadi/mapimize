// filepath: /Users/soroushsajadi/Desktop/mapimize/Client/my-app/src/utils/openai.ts
import axios from "axios";

const OPENAI_API_KEY = "your-openai-api-key"; // Replace with your OpenAI API key

export const fetchCountryData = async (field: string): Promise<any> => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003", // Use the appropriate model
        prompt: `Provide a ranked list of ${field} values for each country.`,
        max_tokens: 1000,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].text; // Extract the response text
  } catch (error) {
    console.error("Error fetching data from OpenAI:", error);
    throw error;
  }
};
