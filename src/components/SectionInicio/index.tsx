import Image from 'next/image'

import background from '@/assets/SectionInicio/Completo.png'
import esquare from '@/assets/SectionInicio/horizontal-azul.svg'


import Button from '@/components/Button'

import { ChevronsDown } from 'lucide-react'

export default function SectionInicio() {
  return (
    <section
      id="Início"
      className="flex h-screen w-full items-center justify-center"
    >
      <div className="relative mx-10 flex h-full w-full flex-col items-center justify-between overflow-hidden">
        <Image src={background} alt="ESQUARE" priority={true} className="h-[750px] w-auto absolute bg-cover -z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <div className='h-64'></div>

        <div className='w-screen flex items-center justify-center py-12'>
          <Image src={esquare} alt="ESQUARE" priority={true} className="" />
        </div>

        <div className="mb-16 flex flex-col items-center gap-32">
          <div className=" h-14 w-96 sm:w-72">
            <Button />
          </div>
          <ChevronsDown size={55} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}
