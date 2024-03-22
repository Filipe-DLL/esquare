import Image from 'next/image'
import Link from 'next/link'

interface props {
  imagem: string
  id: number
  titulo: string
}

export default function PageProjetosItem({ imagem, id, titulo }: props) {
  return (
    <div className="group relative max-h-[270px] w-1/4 overflow-hidden text-gray-50 transition-all ease-in-out hover:drop-shadow-md xl:w-1/3 md:w-1/2 2md:w-full">
      <Link href={`/projetos/${id}`} className='overflow-hidden'>
        <Image
          src={imagem}
          alt=""
          width={470}
          height={270}
          objectFit='contain'
          priority
          className="min-h-[270px] object-cover transition-all ease-in-out group-hover:scale-110 group-hover:brightness-75"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 grid place-items-center">
          <div className="cursor-pointer flex-col items-center justify-center transition-all ease-in-out group-hover:flex">
            <h2 className="text-black box-content flex h-16 max-w-[20rem] items-center border-b-2 border-b-transparent text-center text-2xl font-black transition-all ease-in-out group-hover:border-b-gray-50 group-hover:text-gray-50 md:drop-shadow-2xl md:bg-opacity-10">
              {titulo}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  )
}
