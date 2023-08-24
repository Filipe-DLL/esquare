import Image, { StaticImageData } from 'next/image'

interface props {
  titulo: string
  texto: string
  imagem: StaticImageData
}

export default function ServicesPage(props: props) {
  return (
    <div
      id={props.titulo}
      className="flex items-center justify-center gap-10 p-16"
    >
      <Image
        src={props.imagem}
        alt=""
        width={400}
        className="rounded-3xl shadow-md"
      />
      <div className="flex flex-col items-start justify-center gap-4">
        <h2 className="text-center text-2xl font-bold">{props.titulo}</h2>
        <p className="text-justify text-base font-medium">{props.texto}</p>
      </div>
    </div>
  )
}
