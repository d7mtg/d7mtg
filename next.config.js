/** @type {import('next').NextConfig} */
const withSvgr = require('next-plugin-svgr');

const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [
            'firebasestorage.googleapis.com'
        ]
    },
    rewrites() {
        return [
            {
                source: '/contact',
                destination: '/contact/index.html'
            },
            {
                source: '/kosher',
                destination: '/kosher/index.html'
            },
            {
                source: '/aleph',
                destination: '/aleph/index.html'
            },
            {
                source: '/aleph/V2',
                destination: '/aleph/V2/index.html'
            },
            {
                source: '/color-game-alpha',
                destination: '/color-game-alpha/index.html'
            },
            {
                source: '/domain',
                destination: '/domain/index.html'
            },
            {
                source: '/gallery',
                destination: '/gallery/index.html'
            },
            {
                source: '/games/hex-game',
                destination: '/games/hex-game/index.html'
            },
            {
                source: '/games/what-the-hex',
                destination: '/games/what-the-hex/index.html'
            },
            {
                source: '/paskes',
                destination: '/paskes/index.html'
            },
            {
                source: '/placement',
                destination: '/placement/index.html'
            },
            {
                source: '/resize',
                destination: '/resize/index.html'
            },
            {
                source: '/shuffle',
                destination: '/shuffle/index.html'
            },
            {
                source: '/whatsapp',
                destination: '/whatsapp/index.html'
            }
        ]
    },
    experimental: {
        scrollRestoration: true
    }
}

module.exports = withSvgr(nextConfig)
