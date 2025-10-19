
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available in the environment variables
if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Debunks a migration myth using the Gemini API.
 * @param myth The myth to debunk.
 * @param countryName The country context for the myth.
 * @returns A string containing the factual information.
 */
export async function debunkMyth(myth: string, countryName: string): Promise<string> {
  // FIX: Refactored prompt to use systemInstruction for better model guidance
  // and requested HTML output for direct rendering.
  const systemInstruction = `You are an expert on safe migration practices. Your task is to debunk a common migration myth with facts and safe advice for a potential migrant from ${countryName}. Be clear, concise, and empathetic. Provide actionable advice. Explain the real risks and challenges involved, then provide advice on the correct, safe, and legal procedures to follow instead. Format the response as clean HTML to be directly embedded in a webpage. Do not include markdown or backticks like \`\`\`html.`;

  const userPrompt = `Debunk this myth: "${myth}"`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Could not retrieve information at this time. Please check your connection or API key and try again.";
  }
}
