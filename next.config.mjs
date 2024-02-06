/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/admin/:path*",
                destination:
                    "http://193.36.84.151/",
            },
        ];
    },
};

export default nextConfig;
