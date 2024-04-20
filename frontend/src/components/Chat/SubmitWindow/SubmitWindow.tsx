import { useForm } from "react-hook-form";
import { submitWindowStyles, inputBoxStyles } from "./submitWindowStyles"
import promptAnswer from "../../../apiHelpers/promptAnswer";

type FormValues = {
    fieldInput: string
}

interface SubmitProps {
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    setAssistantMessage: React.Dispatch<React.SetStateAction<string>>
}

const SubmitWindow = ({ setMessage, setAssistantMessage }: SubmitProps) => {

    const { register, handleSubmit, reset } = useForm<FormValues>();
    const onSubmit = (data: FormValues) => {
        setMessage(data.fieldInput);
        promptAnswer(data.fieldInput).then((response) => {
            setAssistantMessage(response?.data);
        }).catch((err) => console.log(err));
        reset();
    }
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