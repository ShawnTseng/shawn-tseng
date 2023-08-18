import '../globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google';

const poppinsMedium = Poppins({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-poppins-medium'
});

const poppinsSemibold = Poppins({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-poppins-semibold'
});

const poppinsBold = Poppins({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-poppins-bold'
});

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
      <body className={`
      ${poppinsMedium.variable}
      ${poppinsSemibold.variable}
      ${poppinsBold.variable}
      ${poppinsMedium.className}`}
      >
        {children}
      </body>
    </html>
  )
}
