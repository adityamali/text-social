import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '../components/navbar/navbar'
import { UserProvider } from '@auth0/nextjs-auth0/client'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Text Social',
  description: 'A social network for text-based content',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
      </UserProvider>
    </html>
  )
}
