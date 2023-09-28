import Image from 'next/image'

import Img from '@/assets/PageProjetos/ProjetosPage.jpg'
import { getDados } from '@/utils/data'

interface ProjectProps {
  params: {
    slug: number
  }
}

interface data {
  id: number
  categoria: string
  titulo: string
  cliente: string
  localização: string
  descrição: string
}

export default async function page({ params }: ProjectProps) {
  const data: data[] = await getDados()

  return (
    <section className="animate__fadeIn animate__animated flex min-h-screen flex-col items-center justify-start">
      {/* Header */}
      <div className="flex h-80 w-full items-center justify-center overflow-hidden bg-red-300 bg-cover">
        <div className="relative overflow-hidden bg-cover">
          <Image
            src={Img}
            alt=""
            className="h-80 w-screen overflow-hidden bg-cover object-cover brightness-50"
          />
          <h1 className="absolute left-1/2 top-1/2 h-16 w-3/5 -translate-x-1/2 -translate-y-1/2 transform border-b border-e-gray-100 text-center text-5xl font-semibold capitalize text-gray-50 md:h-auto md:w-11/12 2sm:text-3xl">
            {data[params.slug].titulo}
          </h1>
        </div>
      </div>

      {/* conteudo */}
      <div className="mt-16 flex w-full flex-col items-center justify-center p-6 md:mt-0">
        {/* imagem */}
        <div>
          <Image
            src={Img}
            alt=""
            height={500}
            className="h-[534px] w-[1140px] xl:h-[441px] xl:w-[940px] lg:h-[338px] lg:w-[720px] md:h-auto md:w-full"
          />
        </div>

        {/* box */}
        <div className="my-10 flex w-[1140px] items-center justify-center gap-6 text-black xl:w-[940px] lg:w-[720px] md:w-full md:flex-col md:px-6">
          {/* container 1 */}
          <div className="h-full w-1/2 gap-2 self-start md:w-full">
            <h1 className="text-xl font-extrabold">Detalhes do Projeto</h1>
            <div className="mt-3 flex flex-col gap-6">
              <div>
                <h2 className="font-bold">Cliente:</h2>
                <p className="text-base">{data[params.slug].cliente}</p>
              </div>
              <div>
                <h2 className="font-bold">Localização:</h2>
                <p className="text-base">{data[params.slug].localização}</p>
              </div>
            </div>
          </div>

          {/* container 2 */}
          <div className="h-full w-1/2 gap-4 self-start lg:w-full">
            <h1 className="text-xl font-extrabold">Visão Gera</h1>
            <p className="mt-3 text-base">{data[params.slug].descrição}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
