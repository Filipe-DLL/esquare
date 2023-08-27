import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface props {
  titulo: string
  imagem: StaticImageData
}

export default function ServiçoItem(props: props) {
  return (
    <div className="h-full rounded-[30px] bg-azulPetrolio p-4 text-gray-50 transition-all hover:opacity-90 hover:drop-shadow-md">
      <Link href={`/servicos#${props.titulo}`}>
        <Image
          src={props.imagem}
          alt=""
          width={400}
          className="rounded-3xl pb-4 shadow-md"
        />
        <div className="flex cursor-pointer flex-col items-center justify-center">
          <h2 className="flex h-16 max-w-[20rem] items-center text-center text-2xl font-bold">
            {props.titulo}
          </h2>
        </div>
      </Link>
    </div>
  )
}
