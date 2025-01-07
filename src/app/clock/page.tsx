"use client"

import Image from "next/image"

export default function Clock() {
    return (
        <div className="flex h-full">
            <Image
                className="m-auto"
                width={256}
                height={256}
                src={`https://vps.tttm.us/clock?timestamp=${Date.now() / 1000}`}
                alt="Unable to load clock -- my ssl certificate probably expired ://"
            />
        </div>
    )
}