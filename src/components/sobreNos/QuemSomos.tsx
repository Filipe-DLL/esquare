import Image from 'next/image'

import Botao from '@/components/Botao'

import image1 from '@/assets/sobreNos/img1.jpg'
import image2 from '@/assets/sobreNos/img2.jpg'
import image3 from '@/assets/sobreNos/img3.jpg'
import image4 from '@/assets/sobreNos/img4.jpg'

export default function QuemSomos() {
  return (
    <section
      id="QuemSomos"
      className="flex w-full flex-col items-center justify-center"
    >
      {/* Titulo */}
      <h1 className="mt-20 flex items-center justify-center text-3xl font-black uppercase">
        Quem Somos
      </h1>

      {/* box */}
      <div className="relative my-6 flex h-[44rem] w-5/6 items-center justify-center gap-10 rounded-3xl bg-azulPetrolio p-8 text-gray-50 lg:h-full lg:px-20">
        {/* container */}
        <div className="mb-8 flex h-full flex-col justify-between lg:gap-8 lg:w-5/6">
          <div className="flex items-center gap-12 lg:flex-col">
            <Image
              src={image1}
              alt=""
              width={280}
              height={185}
              className="rounded-3xl"
            />
            <p className="max-w-[68rem] text-justify text-xl font-semibold">
              A Esquare nasceu no polo do cariri cearense com o objetivo de
              fornecer os melhores serviços relacionados a engenharia civil na
              região, tendo sempre o foco na satisfação do cliente em busca do
              sonho de construir sua casa própria ou seu empreendimento.
            </p>
          </div>

          <div className="flex items-center gap-12 lg:flex-col">
            <Image
              src={image2}
              alt=""
              width={280}
              height={185}
              className="rounded-3xl"
            />
            <p className="max-w-[68rem] text-justify text-xl font-semibold">
              Com uma ampla experiência de mercado acerca de projetos e
              construção, trazemos as melhores soluções de projetos para que
              você tenha uma melhor economia e menos dor de cabeça na hora da
              construção.
            </p>
          </div>

          <div className="flex items-center gap-12 lg:flex-col">
            <Image
              src={image3}
              alt=""
              width={280}
              height={185}
              className="rounded-3xl"
            />
            <p className="max-w-[68rem] text-justify text-xl font-semibold">
              Entre em contato conosco e faça já um orçamento para qualquer de
              nossos serviços!
            </p>
          </div>
        </div>

        <div className='2xl:hidden'>
          <Image
            src={image4}
            alt=""
            width={320}
            className="max-w-xs rounded-3xl"
          />
        </div>

        {/* Botão */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform w-96 h-14">
          <Botao />
        </div>
      </div>
    </section>
  )
}
