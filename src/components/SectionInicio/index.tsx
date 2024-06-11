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
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
        {/* Dekstop */}
        <Image src={background}
          alt="ESQUARE"
          priority={true}
          className="max-h-[850px] w-auto absolute bg-cover -z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:hidden"
        />

        {/* Mobile */}
        <Image src={background}
          alt="ESQUARE"
          priority={true}
          className="absolute -z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex bg-cover min-h-[400px] min-w-[600px] overflow-hidden"
        />

        <div className='h-1/6'></div>

        <div className='w-screen h-1/3 flex items-center justify-center bg-background bg-opacity-80 md:bg-opacity-65 md:min-h-[130px] md:h-auto'>
          <Image src={esquare} alt="ESQUARE" priority={true} className="" />
        </div>

        <div className=" h-1/3 flex flex-col items-center justify-between">
          <div className=''></div>
          <div className="h-14 w-96 sm:w-72">
            <Button />
          </div>
          <ChevronsDown size={55} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}

