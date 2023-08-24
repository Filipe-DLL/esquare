import type { Metadata } from 'next'
import { Inter, Roboto_Flex } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata: Metadata = {
  title: 'ESQUARE Engenharia & Projetos',
  description: 'A ESQUARE tem como missão encontrar as melhores soluções de engenharia para proporcionar segurança e tranquilidade para os nossos clientes.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${roboto.variable} font-sans bg-gray-50 box-border p-0 m-0 text-azulIndigo`}>{children}
      </body>
    </html>
  )
}
