import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Chat with me',
  description: 'real time chat application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className= 'bg-[url("/images/chat.jpeg")] min-h-screen bg-cover bg-no-repeat bg-[#5a5050ab] bg-blend-overlay' >{children}</body>
    </html>
  )
}
