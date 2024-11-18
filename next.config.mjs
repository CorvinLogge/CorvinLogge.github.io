import createMDX from '@next/mdx'
import rehypeHighlight from "rehype-highlight";

/** @type {import('webpack').Configuration} */
const webpackConfig = {
    module: {
        rules: [
            {
                test: /\.?$/,
                use: [
                    {
                        loader: '',
                        /** @type {import('@mdx-js/loader').Options} */
                        options: {
                            remarkPlugins: [],
                            rehypePlugins: [rehypeHighlight],
                        }
                    }
                ]
            }
        ]
    }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true,
    webpack: webpackConfig,
}

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [rehypeHighlight],
    },
})

export default withMDX(nextConfig)