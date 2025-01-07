import { redirect } from "next/navigation"
import Classes from "./classes"

export default async ({ searchParams }: { searchParams: Promise<Record<string, string>> }) => {
    const { oauth_token } = await searchParams

    if (!oauth_token) return redirect("/")

    return <Classes key={oauth_token} />
}