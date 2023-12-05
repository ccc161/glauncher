/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    output: 'export',
    trailingSlash: false,//With this option set, urls like /about will not redirect to /about/.

}

module.exports = nextConfig
