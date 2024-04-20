import { submitWindowStyles, inputBoxStyles } from "./submitWindowStyles"

const SubmitWindow = () => {
    return (
        <div className={`${submitWindowStyles}`}>
            <form>
                <input type="text" className={`${inputBoxStyles}`} placeholder="Type your message here..." />
                <button type="submit"><span className="material-symbols-outlined relative top-1 text-2xl">send</span></button>
            </form>
        </div>
    )
}

export default SubmitWindow