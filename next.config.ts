import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
    pageExtensions: ['jsx', 'md', 'mdx', 'tsx'],
};
const withMDX = createMDX({
    // Markdown plugin
})

export default withMDX(nextConfig)
