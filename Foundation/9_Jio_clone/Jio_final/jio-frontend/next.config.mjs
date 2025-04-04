/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                hostname: "image.tmdb.org"
            },
            {
                hostname: "localhost"
            },
        ]
    }
};

export default nextConfig;
