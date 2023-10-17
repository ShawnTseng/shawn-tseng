import '../globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google';
import Navigation from './components/navigation';

const poppinsMedium = Poppins({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-poppins-medium',
  display: 'swap'
});

const poppinsSemibold = Poppins({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-poppins-semibold',
  display: 'swap'
});

const poppinsBold = Poppins({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-poppins-bold',
  display: 'swap'
});

const poppinsExtraBold = Poppins({
  weight: '800',
  subsets: ['latin'],
  variable: '--font-poppins-extrabold',
  display: 'swap'
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
    <html lang="en" className='scroll-smooth'>
      <body className={`
      ${poppinsMedium.variable}
      ${poppinsSemibold.variable}
      ${poppinsBold.variable}
      ${poppinsExtraBold.variable}
      ${poppinsMedium.className}`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  )
}
