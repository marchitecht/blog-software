import { ReactNode, Suspense } from 'react'
import './global.css'
import { Analytics } from '@vercel/analytics/react'

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }) {
  return (
    <>
      <Analytics />
      <body>{children}</body>
    </>
  )
}
