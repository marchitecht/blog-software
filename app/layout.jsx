import { ReactNode, Suspense } from 'react'
import './global.css'
import Script from 'next/script'
import Analytics from '@/helpers/Analytics'

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }) {
  return (
    <>
      {/* <Suspense>
        <Analytics />
      </Suspense> */}
      <body>{children}</body>
    </>
  )
}
