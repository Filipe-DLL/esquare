import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface props {
  titulo: string
  imagem: StaticImageData
}

export default function ServiçoItem(props: props) {
  return (
    <div className='bg-azulPetrolio p-4 text-gray-50 rounded-[30px] h-full hover:drop-shadow-md hover:opacity-90 transition-all'>
      <Link href={`/servicos#${props.titulo}`}>
        <Image
          src={props.imagem}
          alt=""
          width={400}
          className="rounded-3xl shadow-md pb-4"
        />
        <div className="flex cursor-pointer flex-col items-center justify-center">
          <h2 className="flex items-center text-center max-w-[20rem] h-16 text-2xl font-bold">
            {props.titulo}
          </h2>
        </div>
      </Link>
    </div>
  )
}
