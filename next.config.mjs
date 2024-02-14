/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        api_base_url:"http://193.36.84.151/"

    },
    async redirects() {
        return [
            {
                source: '/admin',
                destination: '/admin/services', // Matched parameters can be used in the destination
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
