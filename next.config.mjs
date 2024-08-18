/** @type {import('next').NextConfig} */

export default { 
    reactStrictMode: false,
    images: {
        unoptimized: true
    },
    missingSuspenseWithCSRBailout: false,
    redirects: () => [
        {
            source: "/callback/:path*",
            destination: "http://localhost:3000/:path*",
            permanent: false
        }
    ]
}