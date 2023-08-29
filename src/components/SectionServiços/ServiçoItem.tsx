import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface props {
  titulo: string
  imagem: StaticImageData
}

export default function ServiçoItem(props: props) {
  return (
    <div className="group h-full rounded-[30px] bg-azulPetrolio p-4 text-gray-50  hover:drop-shadow-md">
      <Link href={`/servicos#${props.titulo}`}>
        <Image
          src={props.imagem}
          alt=""
          width={400}
          className="rounded-3xl pb-4 shadow-md "
        />
        <div className="flex cursor-pointer flex-col items-center justify-center">
          <h2 className="box-content flex h-16 max-w-[20rem] items-center border-b-2 border-b-transparent text-center text-2xl font-bold transition-all ease-in-out group-hover:border-b-gray-50">
            {props.titulo}
          </h2>
        </div>
      </Link>
    </div>
  )
}
