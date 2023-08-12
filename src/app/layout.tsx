import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shawn TSENG',
  description: 'Shawn TSENG personal website',
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
