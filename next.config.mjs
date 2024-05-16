import createMDX from '@next/mdx'
import rehypeHighlight from "rehype-highlight";

/** @type {import('webpack').Configuration} */
const webpackConfig = {
    module: {
        rules: [
            {
                test: /\.mdx?$/,
                use: [
                    {
                        loader: '@mdx-js/loader',
                        /** @type {import('@mdx-js/loader').Options} */
                        options: {}
                    }
                ]
            }
        ]
    }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true,
    webpack: webpackConfig
}

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [rehypeHighlight],
    },
})

export default withMDX(nextConfig)