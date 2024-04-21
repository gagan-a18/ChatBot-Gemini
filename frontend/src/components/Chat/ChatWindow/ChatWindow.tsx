import { useState } from "react";
import SubmitWindow from "../SubmitWindow"
import TextWindow from "../TextWindow"
import { chatWindowStyles, lowerWindowStyles } from "./chatWindowStyles"

type Message = {
    role: string,
    info: string
}

const ChatWindow = () => {


    const [message, setMessage] = useState<Message[]>([])

    return (
        <div className={`${chatWindowStyles}`}>
            <TextWindow messages={message} />
            <div className={`${lowerWindowStyles}`}>
                <SubmitWindow messages={message} setMessages={setMessage} />
            </div>
        </div>
    )
}

export default ChatWindow