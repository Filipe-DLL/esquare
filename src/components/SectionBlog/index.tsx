import Image from "next/image";

import Ativo1 from "@/assets/SectionBlog/Ativo 1.png";
import Ativo2 from "@/assets/SectionBlog/Ativo 2.png";
import Ativo3 from "@/assets/SectionBlog/Ativo 3.png";
import Link from "next/link";

export default function SectionValores() {
  return (
    <section
      id="blog"
      className="flex h-full w-full flex-col items-center justify-center bg-[#0e2c88] px-32 sm:p-0"
    >
      {/* Titulo */}
      <h1 className="mt-36 flex items-center justify-center self-start text-8xl font-black text-[#526ca7] md:self-center">
        Blog
      </h1>
      {/* container */}
      <div className="relative flex items-center justify-center gap-10 p-20 2xl:gap-4 lg:flex-wrap sm:p-0">
        <div className="flex h-[500px] w-96 flex-col items-center justify-start overflow-hidden rounded-2xl bg-[#fcfbff] xl:w-72">
          <div className="flex h-48 w-full items-center justify-center  bg-[#d7e0ec]">
            <Image src={Ativo1} alt="" height={150} />
          </div>
          <div className="flex h-full flex-col items-center justify-around">
            <h2 className="p-6 text-center text-2xl font-extrabold">
              O que são projetos complementares e por que você precisa
            </h2>
            <p className="p-6 text-center text-xl font-bold">
              Entenda o que são projetos complementares e a sua importância para
              a execução de obras.
            </p>
            <div></div>
          </div>
        </div>
        <div className="flex h-[500px] w-96 flex-col items-center justify-start overflow-hidden rounded-2xl bg-[#fcfbff] xl:w-72">
          <div className="flex h-48 w-full items-center justify-center  bg-[#d7e0ec]">
            <Image src={Ativo2} alt="" height={150} />
          </div>
          <div className="flex h-full flex-col items-center justify-around">
            <h2 className="p-6 text-center text-2xl font-extrabold">
              Como evitar retrabalho na obra
            </h2>
            <p className="p-6 text-center text-xl font-bold">
              Saiba quais medidas podem ser tomadas para evitar retrabalho
              durante a construção
            </p>
            <div></div>
          </div>
        </div>
        <div className="flex h-[500px] w-96 flex-col items-center justify-start overflow-hidden rounded-2xl bg-[#fcfbff] xl:w-72">
          <div className="flex h-48 w-full items-center justify-center  bg-[#d7e0ec]">
            <Image src={Ativo3} alt="" height={150} />
          </div>
          <div className="flex h-full flex-col items-center justify-around">
            <h2 className="p-6 text-center text-2xl font-extrabold">
              Diferença entre projeto elétrico e cabeamento estruturado
            </h2>
            <p className="p-6 text-center text-xl font-bold">
              Conheça as principais diferenças entre projeto elétrico e
            </p>
            <div></div>
          </div>
        </div>
        {/* Botão */}
        <Link
          href="#contato"
          className="absolute bottom-12 right-8 rounded-full bg-[#161c33] px-8 py-4 text-lg font-extrabold text-[#d9d9d9] shadow-lg transition hover:bg-[#263059] hover:shadow-xl sm:static sm:mb-4"
        >
          Ver todos os artigos
        </Link>
      </div>
    </section>
  );
}
