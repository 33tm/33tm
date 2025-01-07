import "@/app/style.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "33tm",
    description: "github.com/33tm"
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${inter.className} m-4 h-[calc(100dvh-2rem)] outline outline-4 bg-background text-accent`}>
                {children}
            </body>
        </html>
    )
}