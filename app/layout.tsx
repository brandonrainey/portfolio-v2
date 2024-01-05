import './globals.css'

export const metadata = {
  title: 'Frontend Developer Portfolio',
  description: 'Developer portfolio of Brandon Rainey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-arimo">{children}</body>
    </html>
  )
}
