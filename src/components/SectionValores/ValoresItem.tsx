import Image, { StaticImageData } from 'next/image'

interface props {
  titulo: string
  imagem: StaticImageData
  texto: string
}

export default function ValoresItem(props: props) {
  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-10 2xl:w-2/5 md:w-full">
      <div className="">
        <Image
          src={props.imagem}
          alt="rounded"
          height={150}
          className="flex-1"
        />
      </div>

      <h2 className=" text-center text-lg font-extrabold text-gray-50">
        {props.titulo}
      </h2>

      <p className="h-44 w-80 text-center font-medium leading-relaxed text-gray-50 lg:w-64 md:mb-12 md:h-auto md:w-80">
        {props.texto}
      </p>
    </div>
  )
}
