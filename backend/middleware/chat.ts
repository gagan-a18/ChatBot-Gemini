import { Request, Response } from "express";
import aiModels from "../genAiModel/aiModels";
import { gemini_chat } from "../genAiModel/createAiModel";

const textOnly = async (req: Request, res: Response) => {
    const { prompt } = req.body;
    if (!prompt) {
        res.status(400).send('error');
        return;
    }
    try {
        const text = await aiModels(prompt, gemini_chat);
        res.status(200).send(text);
    } catch (error) {
        res.status(400).send(error);
    }

}

export default textOnly;