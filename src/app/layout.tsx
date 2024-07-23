import "@/app/style.css"

export default ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en">
            <body className="m-4 h-[calc(100vh-2rem)] outline outline-4 bg-[#F3EEEA] text-[#594545]">
                {children}
            </body>
        </html>
    )
}