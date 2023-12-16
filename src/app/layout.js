import { Inter } from 'next/font/google'
import './Gato.css'
import './style.css'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gato HTML-NEXT',
  description: 'Convertendo Html para Next',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
