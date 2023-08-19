import Image, { StaticImageData } from "next/image";

interface props {
  titulo: string,
  imagem: StaticImageData,
  texto: string,
  numero: number
}

export default function Iten(props: props) {

  return (
    <div className={`relative h- flex flex-col items-center justify-center gap-8 h-full `} >

      <h2 className="text-center font-extrabold text-lg text-zinc-50">{props.titulo}</h2>

      <div className="flex-1 ">
        <div className="absolute left-4 top-16 w-16 h-16 rounded-full flex items-center justify-center bg-zinc-50 text-2xl font-bold">
          {props.numero}
        </div>
        <Image src={props.imagem} alt="rounded" width={300} height={300}
          className="rounded-full border-8 border-zinc-50" />
      </div>

      <p className="w-80 text-base font-medium text-zinc-50 text-justify flex-1 ">
        {props.texto}
      </p>

    </div>
  )
}
