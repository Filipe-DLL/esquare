import Image, { StaticImageData } from "next/image";

interface props {
  titulo: string,
  imagem: StaticImageData,
  texto: string,
  numero: number
}

export default function Iten(props: props) {

  return (
    <div className="flex min-h-full flex-col items-center justify-between gap-8 2xl:w-2/5">
      <h2 className="text-center text-lg font-extrabold text-zinc-50">
        {props.titulo}
      </h2>

      <div className="relative">
        <p className="absolute top-6 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-50 text-2xl font-bold">
          {props.numero}
        </p>
        <Image
          src={props.imagem}
          alt="rounded"
          width={300}
          height={300}
          className="rounded-full border-8 border-zinc-50 flex-1"
        />
      </div>

      <p className="w-80 h-44 text-justify text-base font-medium text-zinc-50">
        {props.texto}
      </p>
    </div>
  )
}
