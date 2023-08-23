import Image from 'next/image'
import Link from 'next/link'

import whatsapp from '@/assets/inicio/whatsapp.svg'

import Contato from '@/components/Contato'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Inicio from '@/components/inicio/Inicio'
import Instagram from '@/components/instagram/Instagram'
import Projetos from '@/components/projetos/Projetos'
import Serviços from '@/components/serviços/Serviços'
import QuemSomos from '@/components/sobreNos/QuemSomos'
import Valores from '@/components/valores/Valores'

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Link href={'https://api.whatsapp.com/message/KW72DIRAMB7NL1?autoload=1&app_absent=0'}>
        <Image
          src={whatsapp}
          height={75}
          alt="Solicite um orçamento via WhatsApp!"
          className="fixed bottom-7 right-7 z-10 cursor-pointer"
        />
      </Link>

      <NavBar />
      <Inicio />
      <QuemSomos />
      <Serviços />
      <Projetos />
      <Valores />
      <Instagram />
      <Contato />
      <Footer />
    </div>
  )
}
