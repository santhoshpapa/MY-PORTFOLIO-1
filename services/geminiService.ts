
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const getGeminiResponse = async (userPrompt: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    // Construct a system-instruction-like context for the chat
    const systemPrompt = `
      You are the AI version of a Creative Frontend Developer. 
      Your creator is a master of HTML, CSS, React, and JavaScript. 
      You should be helpful, witty, and deeply technical when asked about code.
      If someone asks about your skills, highlight React, Tailwind, and high-quality UI/UX.
      Keep answers concise but inspiring.
    `;

    // Filter history for Gemini structure
    const contents = history.map(h => ({
      role: h.role === 'user' ? 'user' : 'model',
      parts: [{ text: h.text }]
    }));

    // Add the latest message
    contents.push({
      role: 'user',
      parts: [{ text: userPrompt }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
        topP: 0.8,
        topK: 40
      }
    });

    return response.text || "I'm a bit lost in the source code right now. Try asking me again!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to my AI brain. Check your API key or connection.";
  }
};
