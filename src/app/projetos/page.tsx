import Img from '@/assets/PageProjetos/lista-projetos.jpg'
import Image from 'next/image'

import TabsPageProjetos from '@/components/PageProjetos/Tabs'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Page() {
  return (
    <>
      <WhatsAppButton />

      <section className="animate__fadeIn animate__animated flex h-full min-h-screen flex-col items-center justify-start">
        {/* Header */}
        <div className="flex h-96 w-full items-center justify-center overflow-hidden bg-red-300 bg-cover">
          <div className="relative overflow-hidden bg-cover">
            <Image
              src={Img}
              alt=""
              className="h-96 w-screen overflow-hidden bg-cover object-cover brightness-50"
            />
            <h1 className="absolute left-1/2 top-1/2 h-16 w-3/5 -translate-x-1/2 -translate-y-1/2 transform border-b border-e-gray-100 text-center text-5xl font-semibold text-gray-50 md:h-auto md:w-11/12 2sm:text-3xl">
              Projetos Realizados
            </h1>
          </div>
        </div>
        {/* Conteudo */}
        <div className="h-full w-full">
          <TabsPageProjetos />
        </div>
      </section>
    </>
  )
}
