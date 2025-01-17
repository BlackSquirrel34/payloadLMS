import './styles.css'
import React, { ReactElement, ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

// without () when returning more than one line we just return undefined
export default function RootLayout({ children }: RootLayoutProps): ReactNode {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
