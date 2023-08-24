import Image from 'next/image'

import esquare from '@/assets/inicio/horizontal-azul.svg'
import Botao from '@/components/Botao'
import { ChevronsDown } from 'lucide-react'

export default function Inicio() {
  return (
    <section
      id="Inicio"
      className="flex h-screen w-full items-center justify-center bg-gray-50"
    >
      <div className="flex h-full w-full mx-10 flex-col items-center justify-between">
        <div></div>

        <Image src={esquare} alt="ESQUARE" />

        <div className="mb-16 flex flex-col items-center gap-32">
        <div className='w-96 h-14'>
          <Botao />
         </div>
          <ChevronsDown size={55} 
          className='animate-bounce'/>
        </div>
      </div>
    </section>
  )
}
