"use client"

import { useState } from "react"
import { FaArrowRight } from "react-icons/fa6"

import defaultElements from "./elements.json"

export default () => {
    const [state, setState] = useState<"config" | "start">("config")
    const [elements, setElements] = useState(defaultElements)
    const [config, setConfig] = useState<{
        type: boolean
        mellows: boolean
        case: boolean
    }>({
        type: true,
        mellows: false,
        case: true
    })

    if (state === "config") {
        return (
            <div className="flex h-[calc(100vh-2rem)]">
                <p className="absolute md:hidden top-8 left-8">No mobile optimization sorry :{"("}</p>
                <div className="p-4 m-auto outline rounded-sm">
                    <p className="text-2xl font-bold">Elements</p>
                    <div className="flex mb-4 rounded-sm">
                        <div className="m-auto text-center">
                            <p className="flex p-2">
                                {config.type ? "Name" : "Symbol"}
                                <FaArrowRight className="my-auto mx-2" />
                                <strong>{config.type ? "Symbol" : "Name"}</strong>
                            </p>
                            <button
                                className="px-2 py-1 text-xs text-center rounded-md outline outline-2"
                                onClick={() => setConfig(config => ({ ...config, type: !config.type }))}
                            >
                                Swap
                            </button>
                        </div>
                    </div>
                    <div className="flex space-x-12">
                        <p>Limit to Mellows set</p>
                        <input
                            type="checkbox"
                            className="accent-accent"
                            onChange={() => setConfig(config => ({ ...config, mellows: !config.mellows }))}
                        />
                    </div>
                    {config.type && (
                        <div className="flex">
                            <p>Ignore symbol case</p>
                            <input
                                type="checkbox"
                                className="accent-accent ml-auto"
                                onChange={() => setConfig(config => ({ ...config, case: !config.case }))}
                            />
                        </div>
                    )}
                    <button
                        className="w-full mt-2 p-2 rounded-md text-background bg-accent"
                        onClick={() => {
                            if (config.mellows) {
                                setElements(elements
                                    .filter(([, , _]) => _)
                                    .sort(() => Math.random() - 0.5))
                            }
                            setState("start")
                        }}
                    >
                        Start
                    </button>
                </div>
            </div >
        )
    }
    return <></>
}