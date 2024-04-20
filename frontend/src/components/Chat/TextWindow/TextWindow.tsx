import outerWindowStyles from "./textWindowStyles"

interface TextProps {
    userMessage: string,
    assistantMessage: string,
}

const TextWindow = ({ userMessage, assistantMessage }: TextProps) => {

    return (
        <div className={`${outerWindowStyles}`}>
            <div className="flex flex-row justify-end w-11/12 h-10 mt-4 mx-auto">
                <div className="w-3/12">
                    {userMessage}
                </div>
                <div>
                    <span className="material-symbols-outlined text-3xl">person</span>
                </div>
            </div>
            <div className="flex flex-row w-11/12 mt-4 mx-auto">
                <div>
                    <span className="material-symbols-outlined text-3xl">robot_2</span>
                </div>
                <div className="w-9/12 text-justify text-wrap">
                    {assistantMessage}
                </div>
            </div>
        </div>
    )
}

export default TextWindow