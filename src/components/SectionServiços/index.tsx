import ServiçoItem from "@/components/SectionServiços/ServiçoItem";

import Orçamento from "@/assets/SectionServiços/Orçamento.png";
import PPCI from "@/assets/SectionServiços/PPCI.png";
import Eletrico from "@/assets/SectionServiços/Eletrico.png";
import Estrutural from "@/assets/SectionServiços/Estrutural.png";
import Hidrossanitário from "@/assets/SectionServiços/Hidrosanitario.png";

export default function SectionServiços() {
  return (
    <section
      id="Serviços"
      className="flex h-full w-5/6 flex-col items-center justify-center"
    >
      {/* Titulo */}
      <h1 className="mt-20 flex items-center justify-center text-center text-4xl font-black uppercase text-azulIndigo">
        Nossos Serviços
      </h1>

      {/* container */}
      <div className="my-20 flex flex-wrap items-start justify-center gap-8 p-10">
        <ServiçoItem titulo="Projeto Estrutural" imagem={Estrutural} />
        <ServiçoItem titulo="Projeto Elétrico" imagem={Eletrico} />
        <ServiçoItem
          titulo="Projeto Hidrossanitário"
          imagem={Hidrossanitário}
        />
        <ServiçoItem
          titulo={`Prevenção e Combate à Incêndio (PPCI)`}
          imagem={PPCI}
        />
        <ServiçoItem titulo="Orçamento" imagem={Orçamento} />
      </div>
    </section>
  );
}
