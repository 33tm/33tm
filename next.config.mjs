/** @type {import('next').NextConfig} */

export default {
    images: {
        unoptimized: true
    },
    redirects: () => [
        {
            source: "/callback/:path*",
            destination: "http://localhost:3000/:path*",
            permanent: false
        },
        {
            source: "/securecallback/:path*",
            destination: "https://localhost:3000/:path*",
            permanent: false
        },
        {
            source: "/badapple",
            destination: "https://cdn.tttm.us/badapple.html",
            permanent: false
        }
    ]
}