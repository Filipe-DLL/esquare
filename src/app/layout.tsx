import Footer from '@/components/Footer'
import Header from '@/components/Header'

import 'animate.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Flex as Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata: Metadata = {
  title: 'ESQUARE Engenharia & Projetos',
  description:
    'A ESQUARE tem como missão encontrar as melhores soluções de engenharia para proporcionar segurança e tranquilidade para os nossos clientes.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${roboto.variable} m-0 box-border min-h-screen bg-gray-50 p-0 font-sans text-azulIndigo`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
