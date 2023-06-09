'use client'

import { Copyright } from '@/components/Copyright'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { FavoritosProvider } from '@/contexts/favoritosCtx'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <FavoritosProvider>{children}</FavoritosProvider>
      </body>


    </html>
  )
}
