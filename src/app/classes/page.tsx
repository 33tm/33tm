"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect, Suspense } from "react"
import { CgSpinner } from "react-icons/cg"

export default () => {
    return (
        <Suspense fallback={<div className="flex h-full"><CgSpinner className="m-auto animate-spin text-4xl" /></div>}>
            <Classes />
        </Suspense>
    )
}

function Classes() {
    const params = useSearchParams()
    const key = params.get("oauth_token")
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [classes, setClasses] = useState()

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

    if (!key) {
        return (
            <div className="flex h-full">
                <p className="m-auto text-2xl font-semibold">
                    No key provided.
                </p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex h-full">
                <p className="m-auto text-2xl font-semibold">
                    {error}
                </p>
            </div>
        )
    }

    if (loading || !classes) {
        return (
            <div className="flex h-full">
                <CgSpinner className="m-auto animate-spin text-4xl" />
            </div>
        )
    }

    return (
        <div className="flex h-full">
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