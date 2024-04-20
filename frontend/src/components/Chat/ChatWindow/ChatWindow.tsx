import SubmitWindow from "../SubmitWindow"
import TextWindow from "../TextWindow"
import { chatWindowStyles, lowerWindowStyles } from "./chatWindowStyles"

const ChatWindow = () => {
    return (
        <div className={`${chatWindowStyles}`}>
            <TextWindow />
            <div className={`${lowerWindowStyles}`}>
                <SubmitWindow />
            </div>
        </div>
    )
}

export default ChatWindow