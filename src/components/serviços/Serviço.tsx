import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface props {
  titulo: string
  imagem: StaticImageData
}

export default function Serviço(props: props) {
  return (
    <Link href={`/servicos#${props.titulo}`}
      className='hover:drop-shadow-md hover:opacity-90'>
      <Image
        src={props.imagem}
        alt=""
        width={400}
        className="rounded-3xl shadow-md"
      />
      <div className="flex cursor-pointer flex-col items-center justify-center">
        <h2 className="max-w-[25rem] p-5 text-center text-2xl font-bold">
          {props.titulo}
        </h2>
      </div>
    </Link>
  )
}
