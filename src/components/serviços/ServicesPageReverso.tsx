import Image, { StaticImageData } from "next/image";

interface props {
  titulo: string;
  texto: string;
  imagem: StaticImageData;
}

export default function ServicesPageReverso(props: props) {
  return (
    <div id={props.titulo} className="p-16 flex items-center justify-center gap-10">
      <div className="flex flex-col items-start justify-center gap-4">
        <h2 className="w-full text-right text-2xl font-bold">{props.titulo}</h2>
        <p className="font-medium text-base text-justify">
          {props.texto}
        </p>
      </div>
      <Image src={props.imagem} alt="" width={400}
        className="rounded-3xl shadow-default" />
    </div>
  )
}
