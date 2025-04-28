import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface props {
  titulo: string;
  texto: string;
  imagem: StaticImageData;
}

export default function ServiçoItem(props: props) {
  return (
    <div className="hover:-translate-y-3 hover:drop-shadow-md shadow-md">
      <div className="relative sm:min-h-10 h-96 w-64 group rounded-2xl text-[#0d417b] bg-[#d0d4da] transition-all ease-in-out hover:-translate-y-3 hover:drop-shadow-md shadow-md">
        <Link
          href={`/servicos#${props.titulo}`}
          className="flex flex-col h-full items-center justify-start rounded-2xl p-5"
        >
          <div className="flex h-56 w-48 flex-col items-center justify-start">
            <Image
              src={props.imagem}
              alt=""
              width={150}
              className="min-w-[150px] overflow-hidden rounded-3xl bg-cover object-cover sm:w-[20px]"
            />

            <h2 className="box-content flex max-w-[20rem] items-center border-b-2 border-b-transparent text-center text-3xl font-bold transition-all ease-in-out">
              {props.titulo}
            </h2>
          </div>

          <p className="mt-2 text-center font-semibold text-base text-[#0d417b]">{props.texto}</p>
        </Link>
      </div>
      <Link href={"/sobre"} className="flex items-center justify-center  -mt-6">
        <div className="relative flex p-2 px-10 cursor-pointer items-center justify-center rounded-full bg-[#161c33] text-center text-xl font-bold text-gray-50 transition-all ease-in-out hover:bg-[#263059] ">
          Saiba mais
        </div>
      </Link>
    </div>
  );
}
