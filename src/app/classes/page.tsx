"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { CgSpinner } from "react-icons/cg"
import redirect from "@/redirect"

export default () => {
    const params = useSearchParams()
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [classes, setClasses] = useState()

    const key = params.get("oauth_token")
    if (!key) {
        redirect("/")
        return
    }

    useEffect(() => {
        if (!key) return
        setLoading(true)
        fetch(process.env.NEXT_PUBLIC_BOT_URL!, {
            method: "POST",
            body: JSON.stringify({ key }),
            headers: { "Content-Type": "application/json" }
        }).then(async res => {
            const { error, classes } = await res.json()
            setLoading(false)
            if (error) return setError(error)
            setClasses(classes)
        }).catch(() => {
            setError("Server offline!")
            setLoading(false)
        })
    }, [key])

    if (error) return (
        <div className="flex h-[calc(100vh-2rem)]">
            <p className="m-auto text-2xl font-semibold">
                {error}
            </p>
        </div>
    )

    if (loading || !classes) return (
        <div className="flex h-[calc(100vh-2rem)]">
            <CgSpinner className="m-auto animate-spin text-4xl" />
        </div>
    )

    return (
        <div className="flex h-[calc(100vh-2rem)]">
            <div className="m-auto text-center space-y-2">
                <p>Your schedule was detected as:</p>
                <br />
                {
                    // @ts-ignore
                    classes!.map(({ period, name, teacher }) => (
                        <div key={period} className="px-8 py-2 rounded-md h-auto bg-[#d9cdcd]">
                            {name} <p className="font-bold">{teacher}</p>
                        </div>
                    ))
                }
                <br />
                <p>You can close this tab.</p>
            </div>
        </div>
    )
}