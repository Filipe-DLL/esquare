import Image from 'next/image'
import Link from 'next/link'

import whatsapp from '@/assets/SectionInicio/whatsapp.svg'

export default function WhatsAppButton() {
  return (
    <Link
      href={
        'https://api.whatsapp.com/message/KW72DIRAMB7NL1?autoload=1&app_absent=0'
      }
    >
      <Image
        src={whatsapp}
        height={75}
        alt="Solicite um orçamento via WhatsApp!"
        className="fixed bottom-7 right-7 z-10 cursor-pointer transition-all hover:scale-110 hover:drop-shadow-md"
      />
    </Link>
  )
}
