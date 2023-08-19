import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface props {
  titulo: string;
  imagem: StaticImageData;
}

export default function Serviço(props: props) {
  return (
    <Link href={`/servicos#${props.titulo}`}>
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <h2 className="max-w-[25rem] text-center text-2xl font-bold p-5">
          {props.titulo}
        </h2>
        <Image src={props.imagem} alt="" width={400}
          className="rounded-3xl shadow-default" />
      </div>
    </Link>
  )
}
