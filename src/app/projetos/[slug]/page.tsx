import Image from 'next/image'

import Img from '@/assets/PageProjetos/projetos-page.jpg'
import PageProjectDetails from '@/components/PageProjetos/PageProjectDetails'
import { projectData } from '@/data/projectData'

interface ProjectProps {
  params: {
    slug: number
  }
}

export default async function page({ params }: ProjectProps) {
  return (
    <section className="animate__fadeIn animate__animated  mt-16 flex min-h-screen flex-col items-center justify-start">
      {/* Header */}
      <div className="flex h-80 w-full items-center justify-center overflow-hidden bg-cover">
        <div className="relative overflow-hidden bg-cover">
          <Image
            src={Img}
            alt=""
            className="h-80 w-screen overflow-hidden bg-cover object-cover brightness-50"
          />
          <h1 className="absolute left-1/2 top-1/2 h-16 w-3/5 -translate-x-1/2 -translate-y-1/2 transform border-b border-e-gray-100 text-center text-5xl font-semibold capitalize text-gray-50 md:h-auto md:w-11/12 2sm:text-3xl">
            {projectData[params.slug].titulo}
          </h1>
        </div>
      </div>

      {/* conteudo */}
      <PageProjectDetails data={projectData[params.slug]} />
    </section>
  )
}
