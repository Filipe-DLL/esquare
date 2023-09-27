

interface ProjectProps {
  params: {
    slug: string
  }
  // titulo: string
  // detalhes: string
  // Cliente: string
}

export default function page({ params }: ProjectProps) {
  // console.log(params, titulo)

  return (
    <section className="animate__fadeIn animate__animated flex min-h-screen flex-col items-center justify-start">
      {/* Header */}
      {/* <div className="flex h-80 w-full items-center justify-center overflow-hidden bg-red-300 bg-cover">
        <div className="relative overflow-hidden bg-cover">
          <Image
            src={imagem}
            alt=""
            className="h-80 w-screen overflow-hidden bg-cover object-cover brightness-50"
          />
          <h1 className="absolute left-1/2 top-1/2 h-16 w-3/5 -translate-x-1/2 -translate-y-1/2 transform border-b border-e-gray-100 text-center text-5xl font-semibold capitalize text-gray-50 md:h-auto md:w-11/12">
            {params.slug}
            {titulo}
          </h1>
        </div>
      </div> */}
    </section>
  )
}
