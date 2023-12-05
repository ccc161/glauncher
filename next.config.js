/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    output: 'export',
    trailingSlash: false,//With this option set, urls like /about will not redirect to /about/.
    exportPathMap: function() {
        return {
            '/': {page: '/tool-page/home'}
        }
    },
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };
        return config
    }
}

module.exports = nextConfig
