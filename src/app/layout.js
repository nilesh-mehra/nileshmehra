import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nilesh Mehra | Portfolio',
  description: "Nilesh Mehra's personal portfolio showcasing projects, skills, and contact info.",
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    apple: '/apple-touch-icon.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}