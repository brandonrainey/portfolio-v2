import './globals.css'
import type { Metadata } from 'next'
import { Arimo } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Frontend Developer Portfolio',
  description:
    "I'm Brandon Rainey, a Frontend Developer passionate about crafting interactive and visually appealing websites. Explore my portfolio featuring projects that showcase my skills in technologies like Typescript and React. Let's connect and discuss how I can bring my skills to your team.",
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
      <head>
        <link rel="preload" href="/pfp-transparent.webp" as="image" />
        <link rel="preload" href="/cubes.png" as="image" />
      </head>
      <body className={`font-Arimo ${arimo.variable}`}>
        {children}
      </body>
    </html>
  )
}
