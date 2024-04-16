import { ChatSession, GoogleGenerativeAI } from "@google/generative-ai";

let gemini_chat: ChatSession;

const createAiModel = () => {

    const genAI = new GoogleGenerativeAI(`${process.env.GEMINI_API_KEY}`);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    gemini_chat = model.startChat();

}

export { createAiModel, gemini_chat };
