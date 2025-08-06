import type { MDXComponents } from 'mdx/types'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

const components = {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
        <h2>{children}</h2>
    ),
    h2: ({ children }) => (
        <h3>{children}</h3>
    ),
    h3: ({ children }) => (
        <h4>{children}</h4>
    ),
    h4: ({ children }) => (
        <h5>{children}</h5>
    ),
    h5: ({ children }) => (
        <h6>{children}</h6>
    ),
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
    return components
}