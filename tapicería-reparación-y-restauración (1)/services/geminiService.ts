import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SERVICES, BUSINESS_NAME } from "../constants";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual amable y experto de una tapicería artesanal llamada "${BUSINESS_NAME}".
Tu objetivo es ayudar a clientes potenciales que visitan la web.
Eres un experto en telas, espumas, restauración de muebles y diseño de interiores.

Tus responsabilidades:
1. Responder preguntas sobre si vale la pena retapizar un mueble (generalmente sí, por calidad de estructura y valor sentimental).
2. Explicar brevemente los tipos de telas (antimanchas, terciopelo, piel, polipiel, lino).
3. Dar estimaciones de PRECIO MUY APROXIMADAS y siempre con un descargo de responsabilidad (disclaimer).
   - Ejemplo: "Retapizar una silla de comedor suele costar entre 40€ y 80€ dependiendo de la tela y el estado de la espuma, pero necesito verla para dar un precio exacto."
4. Animar SIEMPRE al usuario a contactar por WhatsApp o formulario para una cita o presupuesto final.
5. Sé breve, profesional y cercano. Habla en español.

Los servicios que ofrecemos son: ${SERVICES.map(s => s.title).join(', ')}.
`;

export const initializeChat = (): void => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 300,
      },
    });
  } catch (error) {
    console.error("Error initializing Gemini chat:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    return "Lo siento, el asistente no está disponible en este momento. Por favor contáctanos directamente.";
  }

  try {
    const result: GenerateContentResponse = await chatSession.sendMessage({ message });
    return result.text || "Lo siento, no pude entender eso. ¿Podrías reformularlo?";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Hubo un error de conexión. Por favor intenta más tarde o contáctanos por teléfono.";
  }
};