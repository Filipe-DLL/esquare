import Image, { StaticImageData } from 'next/image'

interface props {
  titulo: string
  imagem: StaticImageData
}

export default function PageServiçosItem(props: props) {
  return (
    <div id={props.titulo} className="flex items-center justify-center gap-10">
      {/* container */}
      <div className="flex items-center justify-center">
        {/* box */}
        <div className="relative w-10/12 overflow-hidden bg-cover">
          {/* image */}
          <Image
            src={props.imagem}
            alt=""
            priority={true}
            className="blur-s h-80 w-screen overflow-hidden bg-cover object-cover brightness-50"
          />
          {/* absolute */}
          <div className="absolute bottom-0 left-0 right-0 top-0 grid place-items-center">
            <div className="flex w-[700px] flex-col items-center justify-center text-gray-50 md:w-9/12">
              <div className="flex flex-col items-center justify-center text-start">
                <h2 className="min-w-fit text-3xl font-extrabold sm:text-center">
                  {props.titulo}
                </h2>
                <span className="mb-2 h-3 min-w-fit select-none border-b-2 border-gray-50 text-3xl font-extrabold text-transparent">
                  {props.titulo}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
