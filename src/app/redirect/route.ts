import { NextRequest, NextResponse } from "next/server"

export const GET = (req: NextRequest) => {
    const params = Object.fromEntries(req.nextUrl.searchParams)
    if (!params.url)
        return new Response("Missing \"url\" query parameter!", { status: 400 })
    const decoded = Buffer.from(decodeURIComponent(params.url), "base64").toString()
    const url = `${decoded}${decoded.includes("?") ? "&" : "?"}${new URLSearchParams((({ url, ...params }) => params)(params))}`
    return NextResponse.redirect(url)
}