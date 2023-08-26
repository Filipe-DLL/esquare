import Image from 'next/image'
import Link from 'next/link'

import whatsapp from '@/assets/inicio/whatsapp.svg'

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import SectionContatos from '@/components/SectionContatos'
import SectionInicio from '@/components/SectionInicio'
import SectionProjetos from '@/components/SectionProjetos'
import SectionQuemSomos from '@/components/SectionQuemSomos'
import SectionServiços from '@/components/SectionServiços'
import SectionValores from '@/components/SectionValores'
import SectionInstagram from '@/components/SectionInstagram'

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Link href={'https://api.whatsapp.com/message/KW72DIRAMB7NL1?autoload=1&app_absent=0'}>
        <Image
          src={whatsapp}
          height={75}
          alt="Solicite um orçamento via WhatsApp!"
          className="fixed bottom-7 right-7 z-10 cursor-pointer hover:scale-110 hover:drop-shadow-md transition-all"
        />
      </Link>

      <NavBar />
      <SectionInicio />
      <SectionQuemSomos />
      <SectionServiços />
      <SectionProjetos />
      <SectionValores />
      <SectionInstagram />
      <SectionContatos />
      <Footer />
    </div>
  )
}
