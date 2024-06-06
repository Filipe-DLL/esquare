import Image from 'next/image'

import Button from '@/components/Button'

import image1 from '@/assets/SectionQuemSomos/img1.jpg'
import image2 from '@/assets/SectionQuemSomos/img2.jpg'
import image3 from '@/assets/SectionQuemSomos/img3.jpg'
import image4 from '@/assets/SectionQuemSomos/img4.png'

export default function SectionQuemSomos() {
  return (
    <section
      id="QuemSomos"
      className="flex w-full flex-col items-center justify-center "
    >
      {/* box */}
      <div className="relative my-20 flex h-full flex-col items-center justify-center gap-8 rounded-3xl  bg-azulPetrolio p-12 text-gray-50 lg:h-full lg:w-11/12 lg:rounded-3xl md:px-4">
        {/* Titulo */}
        <h1 className="-mt-5 flex items-center justify-center text-center text-4xl font-black uppercase">
          Quem Somos
        </h1>

        {/* container */}
        <div className="flex gap-8 lg:w-5/6 lg:items-center lg:justify-center">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-8 lg:flex-col">
              <Image
                src={image1}
                alt=""
                width={280}
                height={185}
                className="rounded-3xl lg:w-10/12"
              />
              <p className="max-w-[30rem] text-justify text-xl font-semibold sm:h-auto sm:w-auto">
                A Esquare nasceu no polo do cariri cearense com o objetivo de
                fornecer os melhores serviços relacionados a engenharia civil na
                região, tendo sempre o foco na satisfação do cliente em busca do
                sonho de construir sua casa própria ou seu empreendimento.
              </p>
            </div>

            <div className="flex items-center gap-8 lg:flex-col">
              <Image
                src={image2}
                alt=""
                width={280}
                height={185}
                className="rounded-3xl lg:w-10/12"
              />
              <p className="max-w-[30rem] text-justify text-xl font-semibold sm:h-max sm:w-auto">
                Com uma ampla experiência de mercado acerca de projetos e
                construção, trazemos as melhores soluções de projetos para que
                você tenha economia e segurança na hora da construção.
              </p>
            </div>

            <div className="flex items-center gap-8 lg:flex-col">
              <Image
                src={image3}
                alt=""
                width={280}
                height={185}
                className="rounded-3xl lg:w-10/12"
              />
              <p className="max-w-[30rem] text-justify text-xl font-semibold sm:h-auto sm:w-auto">
                Entre em contato conosco para que possamos dar início ao projeto
                do seu futuro!
              </p>
            </div>
          </div>

          <div className="2xl:hidden flex items-center justify-center w-[411px] overflow-hidden">
            <Image
              src={image4}
              width={450}
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>

        {/* Botão */}
        <div className="absolute bottom-0 left-1/2 h-14 w-96 -translate-x-1/2 translate-y-1/2 transform sm:w-72">
          <Button />
        </div>
      </div>
    </section>
  )
}
