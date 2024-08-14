import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bai_Jamjuree as Baijamjuree } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });
const baijamjuree = Baijamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' })

export const metadata: Metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construída com React, NextJS, TailwindCSS e TypeScript',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans text-gray-100 bg-gray-900`}>{children}</body>
    </html>
  )
}
