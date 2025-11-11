import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shubham Ghag - Data Scientist',
  description: 'Data Scientist with expertise in economics, machine learning, and data analysis. BA in Economics, Masters in Applied Economics.',
  keywords: 'data scientist, economics, machine learning, data analysis, portfolio',
  authors: [{ name: 'Shubham Ghag' }],
  openGraph: {
    title: 'Shubham Ghag - Data Scientist',
    description: 'Data Scientist with expertise in economics, machine learning, and data analysis.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}

