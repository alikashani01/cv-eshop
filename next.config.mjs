/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                hostname: "res.cloudinary.com",
            },
            {
                hostname: "www.apple.com",
            },
            {
                hostname: "store.storeimages.cdn-apple.com",
            },
            {
                hostname: "duet-cdn.vox-cdn.com",
            },
        ],
    },
};

export default nextConfig;
