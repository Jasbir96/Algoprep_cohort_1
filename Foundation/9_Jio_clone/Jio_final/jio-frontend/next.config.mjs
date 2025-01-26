/** @type {import('next').NextConfig} */
const nextConfig = {
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
