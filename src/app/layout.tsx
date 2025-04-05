import Footer from '@/components/Footer'
import Header from '@/components/Header'

import 'animate.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Flex as Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata: Metadata = {
  title: 'ESQUARE Engenharia & Projetos',
  description:
    'A ESQUARE tem como missão encontrar as melhores soluções de engenharia para proporcionar segurança e tranquilidade para os nossos clientes.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${roboto.variable} m-0 box-border min-h-screen bg-background p-0 font-sans text-azulIndigo`}
      >
        <WhatsAppButton />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
