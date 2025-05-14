// import Image from "next/image";

// import background from "@/assets/SectionInicio/backgroud.png";
// import Link from "next/link";

// export default function SectionInicio() {
//   return (
//     // <section className="relative  w-full bg-gradient-to-tl from-blue-900 to-blue-700">
//     <section
//       id="Início"
//       className="relative flex h-screen w-full items-center justify-start bg-gradient-to-tl from-blue-950 to-blue-700"
//     >
//       <div className="relative flex h-screen w-9/12 items-center justify-start overflow-hidden">
//         {/* Imagem de fundo */}
//         <Image
//           src={background}
//           alt="background"
//           quality={100}
//           unoptimized={true}
//           priority={true}
//           className="absolute h-full w-full object-cover brightness-75"
//         // className="absolute object-cover brightness-75"
//         />
//       </div>

//       {/* Overlay com conteúdo */}
//       <div className="absolute right-52 flex h-full items-center justify-center px-4 text-white">
//         <div className="text-start">
//           <h1 className="z-10 text-5xl font-bold leading-tight md:text-5xl sm:text-4xl">
//             Engenharia inteligente, <br />
//             compatibilizada e com <br />
//             foco na execução
//           </h1>

//           <Link
//             href="#contato"
//             className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-lg font-extrabold text-azulIndigo shadow-lg transition hover:scale-105 hover:shadow-xl"
//           >
//             SOLICITE UM ORÇAMENTO
//           </Link>
//         </div>
//       </div>

//       {/* Gradiente no canto direito */}
//       {/* <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#0a0f3f] to-transparent opacity-70"></div> */}
//     </section>
//   );
// }

import Image from "next/image";
import background from "@/assets/SectionInicio/backgroud.png";
import Link from "next/link";

export default function SectionInicio() {
  return (
    <section
      id="Início"
      className="relative flex h-screen min-h-[600px] w-full items-center justify-start bg-gradient-to-tl from-blue-950 to-blue-700"
    >
      <div className="relative h-full w-9/12 overflow-hidden 2xl:w-full">
        <Image
          src={background}
          alt="background"
          quality={100}
          unoptimized
          priority
          className="absolute h-full w-full object-cover brightness-75"
        />
      </div>

      <div className="absolute right-52 flex h-full items-center justify-center px-4 text-white md:left-0 md:w-full min-md:mt-6 min-md:h-auto min-md:px-6">
        <div className="max-w-xl text-start">
          <h1 className="z-10 text-5xl font-bold leading-tight md:text-4xl 2md:text-2xl">
            Engenharia inteligente, <br />
            compatibilizada e com <br />
            foco na execução
          </h1>

          <Link
            href="#contato"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-lg font-extrabold text-azulIndigo shadow-lg transition hover:scale-105 hover:shadow-xl md:px-3 md:py-2  md:text-base"
          >
            SOLICITE UM ORÇAMENTO
          </Link>
        </div>
      </div>
    </section>
  );
}
