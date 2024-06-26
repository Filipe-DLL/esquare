import { ImagesCarrossel } from "@/components/carrossel/Carrossel";
import NavProjects from "./NavProjects";

interface dataType {
  data: {
    id: number;
    categoria: string;
    titulo: string,
    cliente: string,
    localização: string
    descrição: string,
    imagens: string[],
  }
}

export default function PageProjectDetails({ data }: dataType) {
  return (
    <div className="flex w-full flex-col items-center justify-center pt-6 md:mt-0">

      <ImagesCarrossel imagens={data.imagens} />

      {/* box */}
      <div className="mt-10 p-6 flex w-[1140px] items-center justify-center gap-6 text-black xl:w-[940px] lg:w-[720px] md:w-full md:flex-col md:px-6">
        {/* container 1 */}
        <div className="h-full w-1/2 gap-2 self-start md:w-full">
          <h1 className="text-xl font-extrabold">Detalhes do Projeto</h1>
          <div className="mt-3 flex flex-col gap-6">
            <div>
              <h2 className="font-bold">Cliente:</h2>
              <p className="text-base">{data.cliente}</p>
            </div>
            <div>
              <h2 className="font-bold">Localização:</h2>
              <p className="text-base">{data.localização}</p>
            </div>
          </div>
        </div>

        {/* container 2 */}
        <div className="h-full w-1/2 gap-4 self-start lg:w-full">
          <h1 className="text-xl font-extrabold">Visão Geral</h1>
          <p className="mt-3 text-base">{data.descrição}</p>
        </div>

      </div>

      {/* Navegação */}
      <NavProjects id={data.id} />

    </div>
  )
}