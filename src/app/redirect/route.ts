import { NextRequest, NextResponse } from "next/server"

export const GET = (req: NextRequest) => {
    const url = req.nextUrl.searchParams.get("url")
    if (!url)
        return new Response("Missing \"url\" query parameter!", { status: 400 })
    return NextResponse.redirect(Buffer.from(decodeURI(url), "base64").toString())
}