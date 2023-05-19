/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['s3-alpha-sig.figma.com', 'source.unsplash.com']
    },
    devIndicators: {
        autoPrerender: false,
    },
    port: 3000,
}

module.exports = nextConfig
