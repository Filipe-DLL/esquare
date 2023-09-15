import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface props {
  titulo: string
  imagem: StaticImageData
}

export default function ServiçoItem(props: props) {
  return (
    <div className="group relative h-full rounded-[30px] text-gray-50 transition-all ease-in-out  hover:-translate-y-3 hover:drop-shadow-md">
      <Link href={`/servicos#${props.titulo}`}>
        <Image
          src={props.imagem}
          alt=""
          width={400}
          className="h-[485px] overflow-hidden rounded-3xl bg-cover object-cover shadow-md brightness-50"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 grid h-[485] place-items-center">
          <div className="flex cursor-pointer flex-col items-center justify-center">
            <h2 className="box-content flex h-16 max-w-[20rem] items-center border-b-2 border-b-transparent text-center text-2xl font-bold transition-all ease-in-out group-hover:border-b-gray-50">
              {props.titulo}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  )
}
