import { useState } from "react";
import SubmitWindow from "../SubmitWindow"
import TextWindow from "../TextWindow"
import { chatWindowStyles, lowerWindowStyles } from "./chatWindowStyles"

const ChatWindow = () => {

    const [usermessage, setUserMessage] = useState("");
    const [assistantmessage, setAssistantMessage] = useState("");

    return (
        <div className={`${chatWindowStyles}`}>
            <TextWindow userMessage={usermessage} assistantMessage={assistantmessage} />
            <div className={`${lowerWindowStyles}`}>
                <SubmitWindow setMessage={setUserMessage} setAssistantMessage={setAssistantMessage} />
            </div>
        </div>
    )
}

export default ChatWindow