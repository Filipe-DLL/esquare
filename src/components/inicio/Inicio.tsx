import Image from 'next/image'

import esquare from '@/assets/inicio/horizontal-azul.svg'
import Botao from '@/components/Botao'
import { ChevronsDown } from 'lucide-react'

export default function Inicio() {
  return (
    <section
      id="Inicio"
      className="flex h-screen w-full justify-center bg-bgHome"
    >
      <div className="flex h-full flex-col justify-between">
        <div></div>

        <Image src={esquare} alt="ESQUARE" />

        <div className="mb-16 flex flex-col items-center gap-32">
          <Botao />
          <ChevronsDown size={55} />
        </div>
      </div>
    </section>
  )
}
