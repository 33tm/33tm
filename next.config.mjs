/** @type {import('next').NextConfig} */

export default {
    reactStrictMode: false,
    images: {
        unoptimized: true
    },
    experimental: {
        missingSuspenseWithCSRBailout: false
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
            destination: "https://cdn.tttm.us/badapple.html"
        }
    ]
}