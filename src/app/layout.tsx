import "@/app/style.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en">
            <body className={`${inter.className} m-4 h-[calc(100vh-2rem)] outline outline-4 bg-background text-accent`}>
                {children}
            </body>
        </html>
    )
}