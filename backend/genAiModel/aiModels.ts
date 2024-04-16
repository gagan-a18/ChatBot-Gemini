import { ChatSession, GenerativeModel } from "@google/generative-ai";

const aiModels = async (prompt: string, gemini_chat: ChatSession) => {

    const result = await gemini_chat.sendMessage(prompt);
    const response = result.response;
    const text = response.text();

    return text;
}

export default aiModels;
