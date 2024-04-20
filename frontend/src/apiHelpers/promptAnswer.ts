import axios from "axios"

const promptAnswer = async (prompt: string) => {
    const response = await axios.post(import.meta.env.VITE_GEMINI_BOT_API_ENDPOINT, {
        "prompt": prompt
    })
    return response;
}


export default promptAnswer;