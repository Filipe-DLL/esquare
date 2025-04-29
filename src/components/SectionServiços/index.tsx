import ServiçoItem from "@/components/SectionServiços/ServiçoItem";

import Cabeamento from "@/assets/SectionServiços/Cabeamento.png";
import PPCI from "@/assets/SectionServiços/PPCI.png";
import Eletrico from "@/assets/SectionServiços/Eletrico.png";
import Estrutural from "@/assets/SectionServiços/Estrutural.png";
import Hidrossanitário from "@/assets/SectionServiços/Hidrosanitario.png";

export default function SectionServiços() {
  return (
    <section
      id="Serviços"
      className="flex h-full w-full flex-col items-center justify-center bg-[#0e2c88] px-32"
    >
      {/* Titulo */}
      <h1 className="mt-20 flex items-center justify-center self-start text-8xl font-black text-[#526ca7]">
        Serviços
      </h1>

      {/* container */}
      <div className="my-20 flex flex-wrap items-center justify-center gap-2 p-10">
        <ServiçoItem titulo="Projeto Estrutural" texto="Projeto de estruturas seguras e otimizadas" imagem={Estrutural} />
        <ServiçoItem titulo="Projeto Elétrico" texto="Projeto de instalações elêtricas eficientes" imagem={Eletrico} />
        <ServiçoItem
          titulo="Projeto Hidrossanitário"
          texto="Projeto de redes hidráulicas e sanitárias completas"
          imagem={Hidrossanitário}
        />
        <ServiçoItem
          titulo={`PPCI`}
          texto="Projeto de prevenção e combate a incêndios"
          imagem={PPCI}
        />
        <ServiçoItem titulo="Cabeamento Estruturado" texto="Projeto de infraestrutura de cabeamento de redes" imagem={Cabeamento} />
      </div>
      {/* BOTÃO */}

    </section>
  );
}
