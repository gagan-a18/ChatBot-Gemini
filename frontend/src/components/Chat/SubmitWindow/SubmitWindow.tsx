import { useForm } from "react-hook-form";
import { submitWindowStyles, inputBoxStyles } from "./submitWindowStyles"
import promptAnswer from "../../../apiHelpers/promptAnswer";

type FormValues = {
    fieldInput: string
}

type Message = {
    role: string,
    info: string
}

interface SubmitProps {
    messages: Message[]
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>
}

const SubmitWindow = ({ messages, setMessages }: SubmitProps) => {

    const { register, handleSubmit, reset } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {

        const newMessage = {
            role: "user",
            info: data.fieldInput,
        }

        promptAnswer(data.fieldInput).then((response) => {
            const newAssistMessage = {
                role: "assistant",
                info: response.data,
            }
            const newAMsg = [...messages, newMessage, newAssistMessage,];
            setMessages(newAMsg);
        }).catch((err) => console.log(err));

        reset();
    }
    console.log(...messages);

    return (
        <div className={`${submitWindowStyles}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('fieldInput', { required: true })} className={`${inputBoxStyles}`} placeholder="Type your message here..." />
                <button type="submit"><span className="material-symbols-outlined relative top-1 text-2xl">send</span></button>
            </form>
        </div>
    )
}

export default SubmitWindow