import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MADWESS - Enterprise AI Operating System',
  description: 'Enterprise AI Operating System for Real Estate and Banking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
