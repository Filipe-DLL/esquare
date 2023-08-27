import Image from 'next/image'

import esquare from '@/assets/SectionInicio/horizontal-azul.svg'

import Button from '@/components/Button'

import { ChevronsDown } from 'lucide-react'

export default function SectionInicio() {
  return (
    <section
      id="Inicio"
      className="flex h-screen w-full items-center justify-center bg-gray-50"
    >
      <div className="mx-10 flex h-full w-full flex-col items-center justify-between ">
        <div></div>

        <Image src={esquare} alt="ESQUARE" className="" />

        <div className="mb-16 flex flex-col items-center gap-32">
          <div className="h-14 w-96">
            <Button />
          </div>
          <ChevronsDown size={55} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}
