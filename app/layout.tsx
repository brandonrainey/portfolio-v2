import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import { Arimo } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Frontend Developer Portfolio',
  description:
    "I'm Brandon Rainey, a frontend developer passionate about crafting interactive and visually appealing websites. Explore my portfolio featuring projects that showcase my skills in technologies like Typescript and React. Eager to contribute fresh perspectives and technical acumen to innovative teams. Let's connect and discuss how I can add value to your next web development endeavor.",
}

const arimo = Arimo({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-arimo',
  weight: '400',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" href="/pfp-transparent.webp" />
      </Head>
      <body className={`font-Arimo ${arimo.variable}`}>{children}</body>
    </html>
  )
}
