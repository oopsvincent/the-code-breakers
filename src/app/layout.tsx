import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Code Breakers',
  description: 'Home of futuristic web creations',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className="min-h-screen w-full overflow-x-hidden transition duration-500">
        {children}
      </body>
    </html>
  );
}
