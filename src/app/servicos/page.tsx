import { serviçosData } from "@/data/serviçosData"
import { default as Image } from "next/image"

export default function Page() {
  return (
    <div className="animate__fadeIn animate__animated flex h-full min-h-screen flex-col items-center justify-center">
      {
        serviçosData.map((item, key) => (
          <div key={key} id={item.titulo}
            className="flex items-center justify-center flex-col gap-10">
            <div className="relative flex items-center justify-center w-10/12 overflow-hidden bg-cover">
              <Image
                src={item.categoria}
                alt=""
                priority={true}
                height={400}
                className="h-80 w-screen overflow-hidden bg-cover object-cover brightness-50"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 grid place-items-center">
                <div className="flex w-[700px] flex-col items-center justify-center text-gray-50 md:w-9/12">
                  <div className="flex flex-col items-center justify-center text-start">
                    <h2 className="min-w-fit text-3xl font-extrabold sm:text-center">
                      {item.titulo}
                    </h2>
                    <span className="mb-2 h-3 min-w-fit select-none border-b-2 border-gray-50 text-3xl font-extrabold text-transparent">
                      {item.titulo}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6 p-6 text-black">
              <p className="w-8/12 p-8 text-justify text-xl font-medium leading-relaxed lg:w-11/12 sm:p-0 sm:text-base 2sm:text-xs">
                {item.descrição}
              </p>
              {
                item.imagens ?
                  <div className="flex items-center justify-center flex-wrap min-h-56 w-full">
                    {
                      item.imagens.map((image, key) => (
                        <Image key={key} src={image} alt="" width={300} height={200} className="h-56 w-auto" />
                      ))
                    }
                  </div>
                  : null
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}
