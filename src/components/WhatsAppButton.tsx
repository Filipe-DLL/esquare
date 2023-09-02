import Image from 'next/image'
import Link from 'next/link'

import whatsapp from '@/assets/SectionInicio/whatsapp.svg'

export default function WhatsAppButton() {
  return (
    <Link href={'https://api.whatsapp.com/send?phone=5588981861972'}>
      <Image
        src={whatsapp}
        height={75}
        alt="Solicite um orçamento via WhatsApp!"
        className="fixed bottom-7 right-7 z-10 cursor-pointer transition-all ease-in-out hover:scale-110 hover:drop-shadow-md 2sm:w-10"
      />
    </Link>
  )
}
