
import { GoogleGenAI } from "@google/genai";

const MODEL_NAME = 'gemini-3-flash-preview';

export const getGeminiResponse = async (userPrompt: string, history: { role: string; content: string }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const systemInstruction = `
    You are an expert on Saudi Arabian traffic laws and the process of obtaining a driver's license in KSA.
    Help the user with queries about:
    1. Steps to get a license (Absher, Dallah, Efada).
    2. Traffic violations and fines (Muroor).
    3. Traffic sign meanings.
    4. Safe driving tips specifically for Saudi roads.
    Keep answers concise, helpful, and professional. Use formatting (bullet points, bold text) for readability.
  `;

  try {
    const chat = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction,
      },
    });

    // Simple history conversion for compatibility if needed, 
    // but the SDK handles strings or parts.
    // For simplicity with this specific SDK's sendMessage:
    const response = await chat.sendMessage({ message: userPrompt });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: Unable to connect to the AI assistant. Please check your connection.";
  }
};
