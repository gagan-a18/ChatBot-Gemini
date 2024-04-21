import outerWindowStyles from "./textWindowStyles"

type Message = {
    role: string,
    info: string
}

interface TextProps {
    messages: Message[]
}

const TextWindow = ({ messages }: TextProps) => {

    return (
        <div className={`${outerWindowStyles}`}>

            {messages.map((item) => (
                <>
                    {item.role === "user" &&
                        <div className="flex flex-row justify-end w-11/12 mt-4">
                            <div>
                                {item.info}
                            </div>
                            <div>
                                <span className="material-symbols-outlined text-3xl relative bottom-2 ml-1">person</span>
                            </div>
                        </div>
                    }
                    {item.role === "assistant" &&
                        <div className="flex flex-row w-9/12 mt-4 mx-auto">
                            <div>
                                <span className="material-symbols-outlined text-3xl relative bottom-2 mr-1">robot_2</span>
                            </div>
                            <div>
                                <p className="text-justify text-pretty">{item.info}</p>
                            </div>
                        </div>
                    }
                </>

            ))}
        </div>
    )
}

export default TextWindow